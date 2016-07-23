import React, { Component } from 'react';
import vjs from 'video.js';
import 'videojs-youtube';

import { store } from 'stores/VideoStore';


class VideoPlayer extends Component {

    componentWillMount() {
        store.subscribe(() => {
            const state = store.getState();
            const video = state.getIn(['videoPlayer', 'selected']);
            if (video) {
                console.log(video);
                this.player.src({
                    type: `video/${video.type}`,
                    src: video.url,
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
