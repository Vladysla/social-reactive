import React, { Component } from 'react';

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';


class HeadlinesPicker extends Component {
    constructor(){
        super()
        this.onWindowClick = this.onWindowClick.bind(this)
    }
    componentDidMount() {
        setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    onWindowClick() {
        // Call `onOverrideContent` again with `undefined`
        // so the toolbar can show its regular content again.
        return this.props.onOverrideContent(undefined);
    };

    render() {
        const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
        return (
            <div>
                {buttons.map((Button, i) => // eslint-disable-next-line
                    <Button key={i} {...this.props} />
                )}
            </div>
        );
    }
}

class HeadlinesButton extends Component {
    constructor(){
        super()
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    // When using a click event inside overridden content, mouse down
    // events needs to be prevented so the focus stays in the editor
    // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
    onMouseDown(event) {event.preventDefault()}

    onClick() {
        // A button can call `onOverrideContent` to replace the content
        // of the toolbar. This can be useful for displaying sub
        // menus or requesting additional information from the user.
        return this.props.onOverrideContent(HeadlinesPicker);
    };

    render() {
        return (
            <div onMouseDown={this.onMouseDown} className="headlineButtonWrapper">
                <button onClick={this.onClick} className="headlineButton">
                    H
                </button>
            </div>
        );
    }
}

const inlineToolbarPlugin = createInlineToolbarPlugin({
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    HeadlinesButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
});
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

export default class CustomInlineToolbarEditor extends Component {

    constructor(){
        super()
        this.state = {
            editorState: createEditorStateWithText(text),
        };
        this.onChange = this.onChange.bind(this)
        this.focus = this.focus.bind(this)
    }

    onChange(editorState) {
        this.setState({
            editorState,
        });
    };

    focus() {
        this.editor.focus();
    };

    render() {
        return (
            <div className="editor" onClick={this.focus}>
                <Editor
                    customStyleMap={{
                        SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
                        SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' }
                    }}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    ref={(element) => { this.editor = element; }}
                />dfg
                <InlineToolbar />
            </div>
        );
    }
}