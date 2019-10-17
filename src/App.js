import React, { Component } from 'react';

import EditorWrapper from './Editor';
import './App.css';

class App extends Component {
    state = {showEditor: false};
    updateShow = () =>  {
        this.setState({showEditor: !this.state.showEditor});
    };

    render() {
        return (
            <div className="app">
                <h1>Demo: JSON Editor with ReactJS</h1>
                <h3>Click button below to add/remove the editor on the page.<br/>
                    Height of the Editor is overwritten in this app.
                </h3>
                <button onClick={this.updateShow}>{this.state.showEditor ? 'Remove Editor': 'Add Editor'}</button>
                <div className="contents">
                    {this.state.showEditor ? <EditorWrapper />: ''}
                </div>
            </div>
        );
    }
}

export default App;
