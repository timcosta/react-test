import React, {Component} from 'react';

import {store, addVideo} from './VideoStore.jsx';

class AddVideoForm extends Component {

    constructor() {
        super();
        this.state = {
            url: ''
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        store.dispatch(addVideo(this.state.url));
        this.setState({url: ''});
    }

    onURLChanged(e) {
        this.setState({url: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" placeholder="url..." onChange={this.onURLChanged.bind(this)} value={this.state.url} />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default AddVideoForm;