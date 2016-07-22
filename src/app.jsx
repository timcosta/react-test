import React, {Component} from 'react';

import VideoPlayer from './Components/VideoPlayer.jsx';
import VideoPlaylist from './Components/VideoPlayList.jsx';
import AddVideoForm from './Components/AddVideoForm.jsx';


class App extends Component {
   render() {
      return (
         <div>
            <VideoPlayer />
            <VideoPlaylist />
            <AddVideoForm />
         </div>
      );
   }
}

export default App;
