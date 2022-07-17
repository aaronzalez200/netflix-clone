import React from 'react'
import Nav from './components/navbar'
import Body from './components/body'
import Content from './components/content'

export default function App() {
  return (
    <div>
        <Nav />
        <Body />
        <Content />
        <br></br>
        <img src={require('./images/Eunha.PNG')} width="200px"/>
        <br></br>
        <img src={require('./images/Eunha.PNG')} width="200px"/>
        <br></br>
        <img src={require('./images/Eunha.PNG')} width="200px"/>
        <br></br>
        <img src={require('./images/Eunha.PNG')} width="200px"/>
        <br></br>
        <img src={require('./images/Eunha.PNG')} width="200px"/>
        <br></br>
        <h1>Footer</h1>
    </div>
  )
}