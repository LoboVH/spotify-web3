import React from 'react';
import Image from 'next/image';
import next from '../assets/next.svg';
import previous from '../assets/previous.svg';
import speaker from '../assets/speaker.svg';
import repeat from '../assets/repeat.svg';
import shuffle from '../assets/shuffle.svg';
import playRounded from '../assets/playRounded.svg';
import pauseIcon from '../assets/pause.svg';
import { useContext } from 'react';
import { SpotifyContext } from '../context/context';

const styles = {
    albumCoverContainer: ` w-20 h-20 mr-3`,
    mainControl: `fixed bottom-0 left-0 py-3  p-5 pr-10 w-screen bg-[#242424] z-40 flex items-center justify-between`,
    flexCenter: `flex items-center`,
    controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
    controlIconContainer: `flex items-center justify-center mb-2`,
    playIcon: `mr-5 w-10 cursor-pointer`,
    pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
    coverPhoto: `object-cover`

}

const PlayerControls = ({songs}) => {
    const {
        currentSong,
        isPlaying,
        volume,
        onVolumeChange,
        timeStamp,
        progress,
        playNext,
        playPrevious,
        isPaused,
        play,
        pause,
        onProgressChange,
    } = useContext(SpotifyContext);

   // if(!isPlaying) return null;
  return (
    <div className={styles.mainControl}>
        <div className={styles.flexCenter}>
            <div className={styles.albumCoverContainer}>
                <Image 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHJT-_J17tYSEG7tKDZFxQIBCEmrUbvvznA&usqp=CAU'
                height={200}
                width={200}
                alt='song-cover'
                />
            </div>
            <div>
                <p>{currentSong.title}</p>
                <p className='opacity-50'>artist</p>
            </div>
        </div>
        <div>
            <div className={styles.controlIconContainer}>
                <div className={styles.controlIcon}>
                    <Image src={shuffle} alt='shuffle' />
                </div>

                <div onClick={ e => playPrevious(songs)} className={styles.controlIcon}>
                    <Image src={previous} alt='previous' />
                </div>

                {isPaused ? <div onClick={play} className={styles.playIcon}><Image src={playRounded} alt='play' /></div> : <div onClick={pause} className={styles.pauseIconStyle} ><Image src={pauseIcon} alt='pause' /></div>  }


                <div onClick={ e => playNext(songs)} className={styles.controlIcon}>
                    <Image src={next} alt='next' />
                </div>

                <div className={styles.controlIcon}>
                    <Image src={repeat} alt='repeat' />
                </div>
            </div>
            <div className={styles.flexCenter}>
                <small>{timeStamp}</small>
                <input 
                value={progress}
                onChange={ e => onProgressChange(e)}
                className={styles.range}
                type="range" 
                />
                <small>2:43</small>
            </div>
        </div>

        <div>
            <div className={styles.flexCenter}>
                <Image
                src={speaker} 
                alt='speaker'
                />
                <input 
                value={volume}
                onChange= {e => onVolumeChange(e)}
                id='volume-range'
                type="range" 
                />
            </div>
        </div>
    </div>
  )
}

export default PlayerControls;