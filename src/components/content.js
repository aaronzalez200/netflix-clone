import React from 'react'
import Left from '../images/LeftArrow.png'
import Right from '../images/RightArrow.png'
import Dota from '../images/dota-img.jpg'
import Video from '../videos/video.mp4'
import Audios from '../images/Audio.png'
import Muted from '../images/Muted.png'
import screenfull from 'screenfull'
import Clip1 from '../videos/Video1.mp4'
import Clip2 from '../videos/Video2.mp4'
import Clip3 from '../videos/Video3.mp4'
import Clip4 from '../videos/Video4.mp4'
import Clip5 from '../videos/Video5.mp4'
import Clip6 from '../videos/Video6.mp4'
import Clip7 from '../videos/Video7.mp4'
import Clip8 from '../videos/Video8.mp4'
import Clip9 from '../videos/Video9.mp4'
import Clip10 from '../videos/Video10.mp4'
import Thumbnail1 from '../images/Thumbnail1.jpg'
import Thumbnail2 from '../images/Thumbnail2.jpg'
import Thumbnail3 from '../images/Thumbnail3.jpg'
import Thumbnail4 from '../images/Thumbnail4.jpg'
import Thumbnail5 from '../images/Thumbnail5.jpg'
import Thumbnail6 from '../images/Thumbnail6.jpg'
import Thumbnail7 from '../images/Thumbnail7.jpg'
import Thumbnail8 from '../images/Thumbnail8.jpg'
import Thumbnail9 from '../images/Thumbnail9.jpg'
import Thumbnail10 from '../images/Thumbnail10.jpg'


export default function App() {

    const API = 'AIzaSyD6P4JsS02PVUsVpt1H7btaz5HfIZcSa3U'
    const BSJ = 'UCvTcxoyItMUSlw8T2MajftA'
    const Boxi = 'UC12Oh46CJACjKrGxrFTKeiw'
    const result = 10;

    const [BSJVideos, setBSJVideos] = React.useState();
    const [BoxiVideos, setBoxiVideos] = React.useState();
    
    React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${BSJ}&part=snippet,id&order=date&maxResults=${result}`)
          const data = await response.json()  
          setBSJVideos(data.items)
        }
        fetchData()
        .catch(console.error)
    }, []) 
    React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${Boxi}&part=snippet,id&order=date&maxResults=${result}`)
          const data = await response.json()  
          setBoxiVideos(data.items)
        }
        fetchData()
        .catch(console.error)
    }, []) 

    console.log(`Fetched Outside...  ${(BSJVideos)}`)

    let Holder = undefined;
    let Holder2 = undefined;
    let Done;
    let Done2;

    if (BSJVideos !== undefined) {
        Holder = BSJVideos.map((index) => {
        return(
            <iframe 
                src={`https://www.youtube.com/embed/${index.id.videoId}`}
                title={`${index.snippet.title}`}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            )
        })
        Done = true;
    }
    if (BoxiVideos !== undefined) {
        Holder2 = BoxiVideos.map((index) => {
        return(
            <iframe 
                src={`https://www.youtube.com/embed/${index.id.videoId}`}
                title={`${index.snippet.title}`}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            )
        })
        Done2 = true;
    }


    
    const [indexFirstRow, setIndexFirstRow] = React.useState(0);
    const [indexSecondRow, setIndexSecondRow] = React.useState(0);
    const [indexThirdRow, setIndexThirdRow] = React.useState(0);

    let screenSize = window.innerWidth
    let MAX;

    if (screenSize > 1500) {
        MAX = 3;
    } else if (screenSize > 1300) {
        MAX = 4;
    } else if (screenSize > 1200) {
        MAX = 5;
    } else if (screenSize < 1200) {
        MAX = 6;
    }

    console.log(screenSize);
   
    let myStyle1 = {
        transform: `translateX(calc(${indexFirstRow} * -100vw + ${indexFirstRow} * 4.1rem))`,
        transition: 'transform 1000ms ease-in-out'
    }
    let myStyle2 = {
        transform: `translateX(calc(${indexSecondRow} * -100vw + ${indexSecondRow} * 4.1rem))`,
        transition: 'transform 1000ms ease-in-out'
    }
    let myStyle3 = {
        transform: `translateX(calc(${indexThirdRow} * -100vw + ${indexThirdRow} * 4.1rem))`,
        transition: 'transform 1000ms ease-in-out'
    }

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
    const [playVideo3, setPlayVideo3] = React.useState(false)
    const [playVideo4, setPlayVideo4] = React.useState(false)
    const [playVideo5, setPlayVideo5] = React.useState(false)
    const [playVideo6, setPlayVideo6] = React.useState(false)
    const [playVideo7, setPlayVideo7] = React.useState(false)
    const [playVideo8, setPlayVideo8] = React.useState(false)
    const [playVideo9, setPlayVideo9] = React.useState(false)
    const [playVideo10, setPlayVideo10] = React.useState(false)

    function handleHover1() {
        setPlayVideo1(true);
    }
    function handleLeave1() {
        setPlayVideo1(false);
        setToggleMuted(true);
    }
    function handleHover2() {
        setPlayVideo2(true);
    }
    function handleLeave2() {
        setPlayVideo2(false);
        setToggleMuted(true);
    }
    function handleHover3() {
        setPlayVideo3(true);
    }
    function handleLeave3() {
        setPlayVideo3(false);
        setToggleMuted(true);
    }
    function handleHover4() {
        setPlayVideo4(true);
    }
    function handleLeave4() {
        setPlayVideo4(false);
        setToggleMuted(true);
    }
    function handleHover5() {
        setPlayVideo5(true);
    }
    function handleLeave5() {
        setPlayVideo5(false);
        setToggleMuted(true);
    }
    function handleHover6() {
        setPlayVideo6(true);
    }
    function handleLeave6() {
        setPlayVideo6(false);
        setToggleMuted(true);
    }
    function handleHover7() {
        setPlayVideo7(true);
    }
    function handleLeave7() {
        setPlayVideo7(false);
        setToggleMuted(true);
    }
    function handleHover8() {
        setPlayVideo8(true);
    }
    function handleLeave8() {
        setPlayVideo8(false);
        setToggleMuted(true);
    }
    function handleHover9() {
        setPlayVideo9(true);
    }
    function handleLeave9() {
        setPlayVideo9(false);
        setToggleMuted(true);
    }
    function handleHover10() {
        setPlayVideo10(true);
    }
    function handleLeave10() {
        setPlayVideo10(false);
        setToggleMuted(true);
    }

    const [toggleMuted, setToggleMuted] = React.useState(true);
    function handleAudioClick() {
        setToggleMuted(prevState => !prevState)
    }

    const inputRef1 = React.useRef();
    const inputRef2 = React.useRef();
    const inputRef3 = React.useRef();
    const inputRef4 = React.useRef();
    const inputRef5 = React.useRef();
    const inputRef6 = React.useRef();
    const inputRef7 = React.useRef();
    const inputRef8 = React.useRef();
    const inputRef9 = React.useRef();
    const inputRef10 = React.useRef();

    const [toggleNav1, setToggleNav1] = React.useState(false);
    const [toggleNav2, setToggleNav2] = React.useState(false);
    const [toggleNav3, setToggleNav3] = React.useState(false);

    return (
        <div className="content">
            <div className="bar1">
                <div className="video-titles">
                    <h1>Liquid.Qojqva</h1>
                </div>
                <div className="media-container">
                    {indexFirstRow > 0 && (
                    <div className={toggleNav1 ? "left-show" : "left"} onClick={handleLeft1}>
                        <img src={Left} width="50px" height="60%"/>
                    </div>
                    )}
                    <div className="slider" onMouseOver={() => setToggleNav1(true)} onMouseLeave={() => setToggleNav1(false)}>
                        <div className="group1" style={myStyle1}>
                            <div className='Content1' onMouseLeave={handleLeave1}>
                                {playVideo1 && (
                                <div className="Card">
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip1} ref={inputRef1} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef1.current).requestFullscreen()}/>
                                    <p className="Card-info">Qojqva tilting Zai for 8 Minutes</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail1} 
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
                                    <video src={Clip2} ref={inputRef2} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef2.current).requestFullscreen()}/>
                                    <p className="Card-info">Zai didn't expect this counterpick</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail2} 
                                    className="test-img"
                                    onMouseOver={handleHover2}
                                />
                            </div>
                            <div className='Content3'>
                                {playVideo3 && (
                                <div className="Card" onMouseLeave={handleLeave3} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip3} ref={inputRef3} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef3.current).requestFullscreen()}/>
                                    <p className="Card-info">BSJ tried to steal my mmr then this happened...</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail3} 
                                    className="test-img"
                                    onMouseOver={handleHover3}
                                />
                            </div>
                            <div className='Content4'>
                                {playVideo4 && (
                                <div className="Card" onMouseLeave={handleLeave4} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip4} ref={inputRef4} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef4.current).requestFullscreen()}/>
                                    <p className="Card-info">Channeling my inner TOPSON</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail4} 
                                    className="test-img"
                                    onMouseOver={handleHover4}
                                />
                            </div>
                            <div className='Content5'>
                                {playVideo5 && (
                                <div className="Card" onMouseLeave={handleLeave5} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip5} ref={inputRef5} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef5.current).requestFullscreen()}/>
                                    <p className="Card-info">DOTA PRO TRIES CS GO</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail5} 
                                    className="test-img"
                                    onMouseOver={handleHover5}
                                />
                            </div>
                            <div className='Content6'>
                                {playVideo6 && (
                                <div className="Card" onMouseLeave={handleLeave6} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip6} ref={inputRef6} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef6.current).requestFullscreen()}/>
                                    <p className="Card-info">I tried my least played hero...</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail6} 
                                    className="test-img"
                                    onMouseOver={handleHover6}
                                />
                            </div>
                            <div className='Content7'>
                                {playVideo7 && (
                                <div className="Card" onMouseLeave={handleLeave7} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip7} ref={inputRef7} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef7.current).requestFullscreen()}/>
                                    <p className="Card-info">Only 1% of people can guess the hero</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail7} 
                                    className="test-img"
                                    onMouseOver={handleHover7}
                                />
                            </div>
                            <div className='Content8'>
                                {playVideo8 && (
                                <div className="Card" onMouseLeave={handleLeave8} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip8} ref={inputRef8} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef8.current).requestFullscreen()}/>
                                    <p className="Card-info">Qojqva and Saberlight team up to takedown Topson</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail8} 
                                    className="test-img"
                                    onMouseOver={handleHover8}
                                />
                            </div>
                            <div className='Content9'>
                                {playVideo9 && (
                                <div className="Card" onMouseLeave={handleLeave9} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip9} ref={inputRef9} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef9.current).requestFullscreen()}/>
                                    <p className="Card-info">This Build Is TOTALLY BROKEN</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail9} 
                                    className="test-img"
                                    onMouseOver={handleHover9}
                                />
                            </div>
                            <div className='Content10'>
                                {playVideo10 && (
                                <div className="Card" onMouseLeave={handleLeave10} >
                                    <div className="Audio-inside">
                                        <img src={toggleMuted ? Muted : Audios} onClick={handleAudioClick}/>
                                    </div>
                                    <video src={Clip10} ref={inputRef10} className="video-here2" loop muted={toggleMuted} autoplay="autoPlay" onClick={() => (inputRef10.current).requestFullscreen()}/>
                                    <p className="Card-info">You still not picking this hero on offlane</p>
                                </div>
                                )}
                                <img 
                                    src={Thumbnail10} 
                                    className="test-img"
                                    onMouseOver={handleHover10}
                                />
                            </div>
                        </div>
                    </div>
                    {indexFirstRow < MAX && (
                    <div className={toggleNav1 ? "right-show" : "right"} onClick={handleRight1}>
                        <img src={Right} width="50px" height="60%"/>
                    </div>
                    )}
                </div>
             </div>
             <div className="bar2">
                <div className="video-titles">
                    <h1>Liquid.BSJ</h1>
                </div>
                <div className="media-container">
                    {indexSecondRow > 0 && (
                    <div className={toggleNav2 ? "left-show" : "left"} onClick={handleLeft2}>
                        <img src={Left} width="50px" height="60%"/>
                    </div>
                    )}
                    <div className="slider" onMouseOver={() => setToggleNav2(true)} onMouseLeave={() => setToggleNav2(false)}>
                        <div className="group1" style={myStyle2}>
                            {Done !== undefined && (Holder)}
                        </div>
                    </div>
                    {indexSecondRow < MAX && (
                    <div className={toggleNav2 ? "right-show" : "right"} onClick={handleRight2}>
                        <img src={Right} width="50px" height="60%"/>
                    </div>
                    )}
                </div>
            </div>
            <div className="bar3">
                <div className="video-titles">
                    <h1>Liquid.Boxi</h1>
                </div>
                <div className="media-container">
                    {indexThirdRow > 0 && (
                    <div className={toggleNav3 ? "left-show" : "left"} onClick={handleLeft3}>
                        <img src={Left} width="50px" height="60%"/>
                    </div>
                    )}
                    <div className="slider" onMouseOver={() => setToggleNav3(true)} onMouseLeave={() => setToggleNav3(false)}>
                        <div className="group1" style={myStyle3}>
                            {Done2 !== undefined && (Holder2)}
                        </div>
                    </div>
                    {indexThirdRow < MAX && (
                    <div className={toggleNav3 ? "right-show" : "right"} onClick={handleRight3}>
                        <img src={Right} width="50px" height="60%"/>
                    </div>
                    )}
                </div>
             </div>
        </div>
    )
}