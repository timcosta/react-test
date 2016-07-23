import { createStore, compose } from 'redux';
import { List, Map } from 'immutable';


const defaultState = new Map({
    videoPlayer: new Map({
        playlist: new List([]),
        selected: null,
    }),
});

function addVideo(state) {
    return {
        type: 'ADD_VIDEO',
        video: state,
    };
}

function selectVideo(video) {
    return {
        type: 'SELECT_VIDEO',
        video,
    };
}

function videoPlaylistReducers(state, action) {
    switch (action.type) {
    case 'ADD_VIDEO':
        return state.updateIn(['videoPlayer', 'playlist'], list => list.push(action.video));
    case 'SELECT_VIDEO':
        return state.setIn(['videoPlayer', 'selected'], action.video);
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
