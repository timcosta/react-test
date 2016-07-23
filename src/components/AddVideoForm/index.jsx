import React, { Component } from 'react';

import { store, addVideo } from 'stores/VideoStore';


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
            type: '',
        };
        // http://www.ian-thomas.net/autobinding-react-and-es6-classes/
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onURLChanged = this.onURLChanged.bind(this);
        this.onTypeChanged = this.onTypeChanged.bind(this);
    }

    /**
     * updates redux store
     *
     * @param {any} e
     */
    onFormSubmit(e) {
        e.preventDefault();
        store.dispatch(addVideo(this.state));
        this.setState({ url: '', type: '' });
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
     * Updates the local state to value of the input on change
     *
     * @param {any} e
     */
    onTypeChanged(e) {
        this.setState({ type: e.target.value });
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
                <label
                    htmlFor="mp4"
                >
                    <input
                        id="mp4"
                        name="type"
                        type="radio"
                        checked={this.state.type === 'mp4'}
                        value="mp4"
                        onChange={this.onTypeChanged}
                    />
                    mp4
                </label>
                <label
                    htmlFor="youtube"
                >
                    <input
                        id="youtube"
                        name="type"
                        type="radio"
                        checked={this.state.type === 'youtube'}
                        value="youtube"
                        onChange={this.onTypeChanged}
                    />
                    youtube
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddVideoForm;
