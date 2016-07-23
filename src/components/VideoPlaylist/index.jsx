import React, { Component } from 'react';

import { store } from 'stores/VideoStore';
import VideoPlaylistItem from 'components/VideoPlaylistItem';

class VideoPlaylist extends Component {
    constructor() {
        super();
        this.state = {
            playlist: [],
        };
    }

    componentWillMount() {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                playlist: state.getIn(['videoPlayer', 'playlist']),
            });
        });
    }

    render() {
        let items = [];

        this.state.playlist.forEach((item, index) => {
            items.push(<VideoPlaylistItem
                key={index}
                url={item.url}
                type={item.type}
            />);
        });

        return (
            <ol>{items}</ol>
        );
    }
}

export default VideoPlaylist;
