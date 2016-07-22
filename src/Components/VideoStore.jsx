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


export {store, addVideo, selectVideo};