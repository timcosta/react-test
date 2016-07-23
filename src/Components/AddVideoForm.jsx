import React, { Component } from 'react';

import { store, addVideo } from './VideoStore.jsx';


/**
 *
 *
 * @class AddVideoForm
 * @extends {Component}
 */
class AddVideoForm extends Component {

    /**
     * Creates an instance of AddVideoForm.
     *
     */
    constructor() {
        super();
        this.state = {
            url: '',
        };
        // http://www.ian-thomas.net/autobinding-react-and-es6-classes/
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onURLChanged = this.onURLChanged.bind(this);
    }

    /**
     * updates redux store
     *
     * @param {any} e
     */
    onFormSubmit(e) {
        e.preventDefault();
        store.dispatch(addVideo(this.state.url));
        this.setState({ url: '' });
    }

    /**
     * Updates the local state to value of the input on change
     *
     * @param {any} e
     */
    onURLChanged(e) {
        this.setState({ url: e.target.value });
    }

    /**
     *
     *
     * @returns jsx view
     */
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
