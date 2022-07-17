import React from 'react'
import Eunha from '../images/Eunha.PNG'
import Play from '../images/Play.png'
import Info from '../images/Info.png'
import Video from '../videos/video.mp4'
import Audio from '../images/Audio.png'
import Mute from '../images/Muted.png'

export default function App() {

    const [toggleMute, setToggleMute] = React.useState(true);
    // initially start muted
    function handleClick() {
        setToggleMute(prevState => !prevState)
    }
    function enterAudio(event) {
        if (event.key === 'Enter') {
          setToggleMute(prevState => !prevState)
        }
      }
    
    return (
        <div className='video-container'>
            <div className="video-text">
                <h1 className="title">Hunt Showdown</h1>
                <p className="description">TreeHard's 1v1 Clutch</p>
                <div className="sub-text">
                    <div className="video-background-buttons">
                        <div className="Play" tabindex="0">
                            <img src={Play} height="30px" />
                            <p>Play</p>
                        </div>
                        <div className="More-Info" tabindex="0">
                            <img src={Info} height="30px"/>
                            <p>More Info</p>
                        </div>
                    </div>
                    <div className="Audio">
                        <img src={toggleMute ? Mute : Audio} width="100px" height="100px" onClick={handleClick} onKeyDown={enterAudio} tabIndex="0"/>
                    </div>
                </div>
            </div>
            <video className='video' loop muted={toggleMute} autoplay="autoplay">
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}