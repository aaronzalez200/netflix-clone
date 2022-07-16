import React from 'react'
import Eunha from '../images/Eunha.PNG'
import Left from '../images/LeftArrow.png'
import Right from '../images/RightArrow.png'

export default function App() {
    
    return (
        <div className="content">
            <div className="video-titles">
                <h1>Best Clips of The Week</h1>
            </div>
            <div className="Images-Here">
                    <p className="left">
                        <img src={Left} width="100%" height="100%"/>
                    </p>
                    <p className="right">
                        <img src={Right} width="100%" height="100%"/>
                    </p>
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
    )
}