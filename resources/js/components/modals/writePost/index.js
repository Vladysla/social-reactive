import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchFeed } from '../../../actions'

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';

const emojiPlugin = createEmojiPlugin({
    useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

import {stateToHTML} from 'draft-js-export-html';

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin, emojiPlugin];
const text = '';

class WritePost extends Component{

    componentDidMount() {
        setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    constructor(){
        super()
        this.state = {
            editorState: createEditorStateWithText(text),
            htmlContent: '',
            errors: ''
        };
        this.onChange = this.onChange.bind(this)
        this.focus = this.focus.bind(this)
    }

    onChange(editorState){
        this.setState({
            editorState,
            htmlContent: stateToHTML(this.state.editorState.getCurrentContent())
        });
    };
    handleSubmit(e){
        const { fetchFeed } = this.props
        e.preventDefault()
        axios.post('/api/createPost', {
            title: '123',
            body: this.state.htmlContent
        })
        .then(response => {
            if (response.data.errors){
                this.setState({
                    errors: response.data.errors.body
                })
            } else {
                this.setState({
                    errors: ''
                })
                fetchFeed()
                $('#writePost').modal('hide')
            }
        })
    }

    focus(){
        this.editor.focus();
    };

    render(){
        let error = (this.state.errors) ? 'border-danger': ''
        return (
            <div className="modal fade" id="writePost" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div id="editor" className={`editor ${error}`} onClick={this.focus}>
                                    <Editor
                                        editorState={this.state.editorState}
                                        onChange={this.onChange}
                                        plugins={plugins}
                                        ref={(element) => { this.editor = element; }}
                                    />
                                    <SideToolbar />
                                </div>
                                <label htmlFor="editor">{this.state.errors}</label>
                                <EmojiSuggestions />
                                <div className="options">
                                    <EmojiSelect />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchFeed
}

export default connect(null, mapDispatchToProps)(WritePost)