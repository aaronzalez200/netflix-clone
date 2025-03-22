import React from 'react'
import Play from '../images/Play.png'
import Info from '../images/Info.png'
import MainVideo from '../videos/MainVideo.mp4'
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

    const playRef = React.useRef();
    
    return (
        <div className='video-container'>
            <div className="video-text">
                <h1 className="title">Team Liquid Dota 2</h1>
                <p className="description">This Will Be Our Improvement Arc</p>
                <div className="sub-text">
                    <div className="video-background-buttons">
                        <div className="Play" tabIndex="0"  onClick={() => (playRef.current).requestFullscreen()}  >
                            <img src={Play} height="30px" alt="image1"/>
                            <p>Play</p>
                        </div>
                        <div className="More-Info" tabIndex="0">
                            <img src={Info} height="30px" alt="image2"/>
                            <p>More Info</p>
                        </div>
                    </div>
                    <div className="Audio">
                        <img src={toggleMute ? Mute : Audio} width="100px" height="100px" onClick={handleClick} onKeyDown={enterAudio} tabIndex="0" alt="image3"/>
                    </div>
                </div>
            </div>
            <video className='video' ref={playRef} loop muted={toggleMute} autoPlay="autoPlay">
                <source src={MainVideo}  type="video/mp4"/>
            </video>
        </div>
    )
}