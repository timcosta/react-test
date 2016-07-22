import React, { Component } from 'react';

import { store, addVideo } from './VideoStore.jsx';

class AddVideoForm extends Component {

    constructor() {
        super();
        this.state = {
            url: '',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onURLChanged = this.onURLChanged.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        store.dispatch(addVideo(this.state.url));
        this.setState({ url: '' });
    }

    onURLChanged(e) {
        this.setState({ url: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    placeholder="url..."
                    onChange={this.onURLChanged}
                    value={this.state.url}
                />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddVideoForm;
