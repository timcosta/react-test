import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import VideoPlaylist from 'components/VideoPlaylist';
import AddVideoForm from 'components/AddVideoForm';

export default function App() {
    return (
        <div>
            <VideoPlayer />
            <VideoPlaylist />
            <AddVideoForm />
        </div>
    );
}
