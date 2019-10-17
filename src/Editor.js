import React, { Component } from 'react';

import Editor from '@mansoorkamthewala/jsoneditor';

export default class EditorWrapper extends Component {
    componentDidMount() {
        this.editor = new Editor(this.container);
    }

    render() {
        return (
            <div className="editor-react-container" ref={elem => this.container = elem} />
        );
    }
}
