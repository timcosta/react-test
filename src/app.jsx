import React from 'react';
import { createStore } from 'redux';
import { List, Map } from 'immutable';


var defaultState = Map({
    videoPlayer: Map({
        playlist: List([]),
        selected: null
    })
});

function addVideo(url) {
    return {
        type: 'ADD_VIDEO',
        url: url
    }
}

function selectVideo(url) {
    return {
        type: 'SELECT_VIDEO',
        url: url
    }
}

function videoPlaylistReducers(state, action) {
    switch (action.type) {
        case 'ADD_VIDEO':
            return state.updateIn(['videoPlayer', 'playlist'], list => list.push(action.url))
        case 'SELECT_VIDEO':
            return state.setIn(['videoPlayer', 'selected'], action.url);
        default:
            return state;
    }
}

var store = createStore(videoPlaylistReducers, defaultState, window.devToolsExtension && window.devToolsExtension());

class AddVideoForm extends React.Component {

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

class VideoPlaylistItem extends React.Component {
    onClick() {
        store.dispatch(selectVideo(this.props.url));
    }

    render() {
        return (
            <li onClick={this.onClick.bind(this)}> {this.props.url} </li>
        )
    }
}

class VideoPlaylist extends React.Component {
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


class App extends React.Component {
   render() {
      return (
         <div>
            <VideoPlaylist />
            <AddVideoForm />
         </div>
      );
   }
}

export default App;
