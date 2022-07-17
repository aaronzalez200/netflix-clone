import React from 'react'
import Eunha from '../images/Eunha.PNG'
import Left from '../images/LeftArrow.png'
import Right from '../images/RightArrow.png'

export default function App() {

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

    return (
        <div className="content">
            <div className="video-titles">
                <h1>Best Clips of The Week</h1>
            </div>
            <div className="media-container">
                 {indexFirstRow > 0 && (
                <div className="left" onClick={handleLeft1}>
                    <img src={Left} width="50px" height="60%"/>
                </div>
                )}
                <div className="slider">
                    <div className="group1" style={myStyle1}>
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
                <div className="right" onClick={handleRight1}>
                    <img src={Right} width="50px" height="60%"/>
                </div>
                )}
             </div>
             <div className="video-titles">
                <h1>Best Clips of The Year</h1>
            </div>
            <div className="media-container">
                 {indexSecondRow > 0 && (
                <div className="left" onClick={handleLeft2}>
                    <img src={Left} width="50px" height="60%"/>
                </div>
                )}
                <div className="slider">
                    <div className="group1" style={myStyle2}>
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
                {indexSecondRow < MAX && (
                <div className="right" onClick={handleRight2}>
                    <img src={Right} width="50px" height="60%"/>
                </div>
                )}
             </div>
             <div className="video-titles">
                <h1>Best Clips All-Time</h1>
            </div>
            <div className="media-container">
                 {indexThirdRow > 0 && (
                <div className="left" onClick={handleLeft3}>
                    <img src={Left} width="50px" height="60%"/>
                </div>
                )}
                <div className="slider">
                    <div className="group1" style={myStyle3}>
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
                {indexThirdRow < MAX && (
                <div className="right" onClick={handleRight3}>
                    <img src={Right} width="50px" height="60%"/>
                </div>
                )}
             </div>
        </div>
    )
}