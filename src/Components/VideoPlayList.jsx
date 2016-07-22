import React, {Component} from 'react';

import {store, selectVideo} from './VideoStore.jsx';


class VideoPlaylistItem extends Component {
    onClick() {
        store.dispatch(selectVideo(this.props.url));
    }

    render() {
        return (
            <li onClick={this.onClick.bind(this)}> {this.props.url} </li>
        )
    }
}

class VideoPlaylist extends Component {
    constructor() {
        super();
        this.state = {
            playlist: []
        }
    }

    componentWillMount() {
        store.subscribe( () => {
            var state = store.getState();
            this.setState({
                playlist: state.getIn(['videoPlayer', 'playlist'])
            })
        })
    }

    render() {
        var items = [];

        this.state.playlist.forEach((item, index) => {
            items.push(<VideoPlaylistItem
                key={index}
                url={item}
            />)
        })

        return (
            <ol>{ items }</ol>
        )
    }
}

export default VideoPlaylist;