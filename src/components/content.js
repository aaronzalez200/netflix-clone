import React from 'react'
import Eunha from '../images/Eunha.PNG'
import Left from '../images/LeftArrow.png'
import Right from '../images/RightArrow.png'

export default function App() {

    const [indexFirstRow, setIndexFirstRow] = React.useState(0);

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

    let myStyle = {
        transform: `translateX(calc(${indexFirstRow} * -100vw))`,
        transition: 'transform 1000ms ease-in-out'
    }

    React.useEffect(function() {
        console.log(indexFirstRow)
        myStyle = {
            transform: `translateX(calc(${indexFirstRow} * -100vw))`,
            transition: 'transform 1000ms ease-in-out'
        }

        console.log(MAX)
    }, [indexFirstRow])

    function handleLeft() {
        setIndexFirstRow(prevState => prevState - 1)
    }
    function handleRight() {
        setIndexFirstRow(prevState => prevState + 1)
        screenSize = window.innerWidth
        console.log(screenSize);
    }

    return (
        <div className="content">
            <div className="video-titles">
                <h1>Best Clips of The Week</h1>
            </div>
            <div className="media-container">
                 {indexFirstRow > 0 && (
                <div className="left" onClick={handleLeft}>
                    <img src={Left} width="50px" height="60%"/>
                </div>
                )}
                <div className="slider">
                    <div className="group1" style={myStyle}>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                        <img src={Eunha} className="Images-Here-Fill"/>
                    </div>
                </div>
                {indexFirstRow < MAX && (
                <div className="right" onClick={handleRight}>
                    <img src={Right} width="50px" height="60%"/>
                </div>
                )}
             </div>
        </div>
    )
}