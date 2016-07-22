import React, { Component } from 'react';
import vjs from 'video.js';
import vjsyt from 'videojs-youtube';

import { store } from './VideoStore.jsx';


class VideoPlayer extends Component {

    componentWillMount() {
        store.subscribe(() => {
            const state = store.getState();
            const url = state.getIn(['videoPlayer', 'selected']);
            if (url) {
                this.player.src({
                    type: (url.indexOf('youtube') > -1 ? 'video/youtube' : 'video/mp4'),
                    src: url,
                });
            }
        });
    }

    componentDidMount() {
        this.player = vjs('my-player');
    }

    render() {
        return (
            <video
                id="my-player"
                className="video-js vjs-default-skin"
                controls
                width="640"
                height="264"
                data-setup='{ "techOrder":["youtube", "html5"] }'
            ></video>
        );
    }
}

export default VideoPlayer;
