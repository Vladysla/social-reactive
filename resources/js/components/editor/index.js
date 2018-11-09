import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';

const emojiPlugin = createEmojiPlugin({
    useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

import {stateToHTML} from 'draft-js-export-html';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, emojiPlugin];
const text = '';

class TextEditor extends Component
{
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
        };
        this.onChange = this.onChange.bind(this)
        this.focus = this.focus.bind(this)
    }

    onChange(editorState){
        this.setState({
            editorState,
            htmlContent: stateToHTML(this.state.editorState.getCurrentContent()),
        });
    };

    focus(){
        this.editor.focus();
    };

    render(){
        return (
            <div>
                <div className="editor" onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />
                    <InlineToolbar />
                </div>
                <EmojiSuggestions />
                <div className="options">
                    <EmojiSelect />
                </div>
            </div>
        )
    }
}

export default TextEditor