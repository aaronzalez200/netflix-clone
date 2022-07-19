import React from 'react'
import Eunha from '../images/Eunha.PNG'
import Left from '../images/LeftArrow.png'
import Right from '../images/RightArrow.png'
import Dota from '../images/dota-img.jpg'
import Video from '../videos/video.mp4'
import Audios from '../images/Audio.png'
import Muted from '../images/Muted.png'

export default function App() {

    const [indexFirstRow, setIndexFirstRow] = React.useState(0);
    const [indexSecondRow, setIndexSecondRow] = React.useState(0);
    const [indexThirdRow, setIndexThirdRow] = React.useState(0);

    let screenSize = window.innerWidth
    let MAX;

    if (screenSize > 1500) {
        MAX = 2;
    } else if (screenSize > 1300) {
        MAX = 3;
    } else if (screenSize > 1200) {
        MAX = 4;
    } else if (screenSize < 1200) {
        MAX = 5;
    }

    console.log(screenSize);

    let myStyle1 = {
        transform: `translateX(calc(${indexFirstRow} * -100vw))`,
        transition: 'transform 1000ms ease-in-out'
    }
    let myStyle2 = {
        transform: `translateX(calc(${indexSecondRow} * -100vw))`,
        transition: 'transform 1000ms ease-in-out'
    }
    let myStyle3 = {
        transform: `translateX(calc(${indexThirdRow} * -100vw))`,
        transition: 'transform 1000ms ease-in-out'
    }

    React.useEffect(function() {
        console.log(indexFirstRow)
        myStyle1 = {
            transform: `translateX(calc(${indexFirstRow} * -100vw))`,
            transition: 'transform 1000ms ease-in-out'
        }

        console.log(MAX)
    }, [indexFirstRow])

    React.useEffect(function() {
        console.log(indexSecondRow)
        myStyle2 = {
            transform: `translateX(calc(${indexSecondRow} * -100vw))`,
            transition: 'transform 1000ms ease-in-out'
        }

        console.log(MAX)
    }, [indexSecondRow])

    React.useEffect(function() {
        console.log(indexThirdRow)
        myStyle3 = {
            transform: `translateX(calc(${indexThirdRow} * -100vw))`,
            transition: 'transform 1000ms ease-in-out'
        }

        console.log(MAX)
    }, [indexThirdRow])

    function handleLeft1() {
        setIndexFirstRow(prevState => prevState - 1)
    }
    function handleRight1() {
        setIndexFirstRow(prevState => prevState + 1)
        screenSize = window.innerWidth
        console.log(screenSize);
    }
    function handleLeft2() {
        setIndexSecondRow(prevState => prevState - 1)
    }
    function handleRight2() {
        setIndexSecondRow(prevState => prevState + 1)
        screenSize = window.innerWidth
        console.log(screenSize);
    }
    function handleLeft3() {
        setIndexThirdRow(prevState => prevState - 1)
    }
    function handleRight3() {
        setIndexThirdRow(prevState => prevState + 1)
        screenSize = window.innerWidth
        console.log(screenSize);
    }

    const [playVideo1, setPlayVideo1] = React.useState(false)
    const [playVideo2, setPlayVideo2] = React.useState(false)

    function handleHover1(){
        console.log("Hovering1")
        setPlayVideo1(true);
    }
    function handleLeave1(){
        console.log("Leaving1")
        setPlayVideo1(false);
        setToggleMuted(true);
    }
    function handleHover2(){
        console.log("Hovering2")
        setPlayVideo2(true);
    }
    function handleLeave2(){
        console.log("Leaving2")
        setPlayVideo2(false);
        setToggleMuted(true);
    }
    const [toggleMuted, setToggleMuted] = React.useState(true);
    function handleAudioClick() {
        setToggleMuted(prevState => !prevState)
    }


    return (
        <div className="content">
            <div className="bar1">
                <div className="video-titles">
                    <h1>Liquid.Qojqva</h1>
                </div>
                <div className="media-container">
                    {indexFirstRow > 0 && (
                    <div className="left" onClick={handleLeft1}>
                        <img src={Left} width="50px" height="60%"/>
                    </div>
                    )}
                    <div className="slider">
                        <div className="group1" style={myStyle1}>
                            <div className='Content1'>
                                {playVideo1 && (
                                <div className="Card" onMouseLeave={handleLeave1}>
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Video} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay"/>
                                    <p className="Card-info">Testing</p>
                                    <p className="Card-info">Testing</p>
                                    <br></br>
                                    <br></br>
                                </div>
                                )}
                                <img 
                                    src={Dota} 
                                    className="Images-Here-Fill"
                                    onMouseOver={handleHover1}
                                />
                            </div>
                            <div className='Content2'>
                                {playVideo2 && (
                                <div className="Card" onMouseLeave={handleLeave2} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Video} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay"/>
                                    <p className="Card-info">Testing</p>
                                    <p className="Card-info">Testing</p>
                                    <br></br>
                                    <br></br>
                                </div>
                                )}
                                <img 
                                    src={Dota} 
                                    className="test-img"
                                    onMouseOver={handleHover2}
                                />
                            </div>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                            <img src={Dota} className="Images-Here-Fill"/>
                        </div>
                    </div>
                    {indexFirstRow < MAX && (
                    <div className="right" onClick={handleRight1}>
                        <img src={Right} width="50px" height="60%"/>
                    </div>
                    )}
                </div>
             </div>
             <div className="video-titles">
                <h1>Liquid.BSJ</h1>
            </div>
            <div className="media-container">
                 {indexSecondRow > 0 && (
                <div className="left" onClick={handleLeft2}>
                    <img src={Left} width="50px" height="60%"/>
                </div>
                )}
                <div className="slider">
                    <div className="group1" style={myStyle2}>
                    <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                    </div>
                </div>
                {indexSecondRow < MAX && (
                <div className="right" onClick={handleRight2}>
                    <img src={Right} width="50px" height="60%"/>
                </div>
                )}
             </div>
             <div className="video-titles">
                <h1>Liquid Pro Matches</h1>
            </div>
            <div className="media-container">
                 {indexThirdRow > 0 && (
                <div className="left" onClick={handleLeft3}>
                    <img src={Left} width="50px" height="60%"/>
                </div>
                )}
                <div className="slider">
                    <div className="group1" style={myStyle3}>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                        <img src={Dota} className="Images-Here-Fill"/>
                    </div>
                </div>
                {indexThirdRow < MAX && (
                <div className="right" onClick={handleRight3}>
                    <img src={Right} width="50px" height="60%"/>
                </div>
                )}
             </div>
        </div>
    )
}