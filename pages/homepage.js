import Nav from '../components/nav'
import Activity from '../components/activity'
import { useEffect, useState } from 'react'
import Header from '../components/Header';

import useSpotify from '../hooks/useSpotify';
import UploadModal from '../components/UploadModal';
import Playlist from '../components/Playlist';

//import {songs} from '../data/songs';
import PlayerControls from '../components/PlayerControls';


const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [musicUrl, setMusicUrl] = useState('');
  const [songs, setSongs] = useState([]);

  const { getSongs, newMusic } = useSpotify(
    musicUrl,
    title,
    setTitle,
    artist,
    setArtist,
    setMusicUrl,
    setShowUploadMusic,
  );

  useEffect(() => {
    getSongs().then(songs=>{
      setSongs(songs);
    })
  }, [])

  console.log(songs);


  return (
    <div className='flex'>
      <Nav />

      <div className='w-full'>
        <Header setShowUploadMusic={setShowUploadMusic} /> 
        <Playlist songs={songs} />
        <PlayerControls songs={songs} />
        
        {showUploadMusic && (
          <UploadModal 
          title={title}
          setTitle={setTitle}
          artist={artist}
          setArtist={setArtist}
          setShowUploadMusic={setShowUploadMusic}
          musicUrl={musicUrl}
          setMusicUrl={setMusicUrl}
          newMusic={newMusic}
          />
        )}
      </div>


      <Activity />
    </div>
  )
}

export default HomePage
