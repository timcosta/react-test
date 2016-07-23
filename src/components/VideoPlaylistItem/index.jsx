import React, { Component } from 'react';

import { store, selectVideo } from 'stores/VideoStore';


class VideoPlaylistItem extends Component {
    constructor() {
        super();
        // http://www.ian-thomas.net/autobinding-react-and-es6-classes/
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        store.dispatch(selectVideo(this.props));
    }

    render() {
        return (
            <li
                onClick={this.onClick}
            > {this.props.url} </li>
        );
    }
}
// https://facebook.github.io/react/docs/reusable-components.html
VideoPlaylistItem.propTypes = {
    url: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
};

export default VideoPlaylistItem;
