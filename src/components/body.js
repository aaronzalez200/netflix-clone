import React from 'react'
import Eunha from '../images/Eunha.PNG'
import Play from '../images/Play.png'
import Info from '../images/Info.png'
import Video from '../videos/video.mp4'

export default function App() {
    
    return (
        <div className='video-container'>
            <div className="video-text">
                <h1 className="title">Hunt Showdown</h1>
                <p className="description">TreeHard's 1v1 Clutch</p>
                <br></br>
                <br></br>
                <div className="sub-text">
                    <div className="Play">
                        <img src={Play} height="30px" />
                        <p>Play</p>
                    </div>
                    <div className="More-Info">
                        <img src={Info} height="30px"/>
                        <p>More Info</p>
                    </div>
                </div>
            </div>
            <video className='video' loop muted autoplay="autoplay">
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}