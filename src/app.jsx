import React from 'react';
import VideoPlayer from './Components/VideoPlayer.jsx';
import VideoPlaylist from './Components/VideoPlayList.jsx';
import AddVideoForm from './Components/AddVideoForm.jsx';

export default function App() {
    return (
        <div>
            <VideoPlayer />
            <VideoPlaylist />
            <AddVideoForm />
        </div>
    );
}
