import React, { Component } from 'react';

import { store, selectVideo } from './VideoStore.jsx';


class VideoPlaylistItem extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        store.dispatch(selectVideo(this.props.url));
    }

    render() {
        return (
            <li
                onClick={this.onClick}
            > {this.props.url} </li>
        );
    }
}
VideoPlaylistItem.propTypes = {
    url: React.PropTypes.string.isRequired,
};

export default VideoPlaylistItem;
