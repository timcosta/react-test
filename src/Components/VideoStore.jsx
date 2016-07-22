import { createStore, compose } from 'redux';
import { List, Map } from 'immutable';


const defaultState = new Map({
    videoPlayer: new Map({
        playlist: new List([]),
        selected: null,
    }),
});

function addVideo(url) {
    return {
        type: 'ADD_VIDEO',
        url,
    };
}

function selectVideo(url) {
    return {
        type: 'SELECT_VIDEO',
        url,
    };
}

function videoPlaylistReducers(state, action) {
    switch (action.type) {
    case 'ADD_VIDEO':
        return state.updateIn(['videoPlayer', 'playlist'], list => list.push(action.url));
    case 'SELECT_VIDEO':
        return state.setIn(['videoPlayer', 'selected'], action.url);
    default:
        return state;
    }
}

const devtools = window.devToolsExtension || (() => noop => noop);
const enhancers = [
    devtools(),
];
const store = createStore(
    videoPlaylistReducers,
    defaultState,
    compose(...enhancers)
);

export { store, addVideo, selectVideo };
