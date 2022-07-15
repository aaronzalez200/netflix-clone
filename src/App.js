import React from 'react'
import Nav from './components/navbar'
import Body from './components/body'

export default function App() {
  return (
    <div>
        <Nav />
        <Body />
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
        <h1>Body</h1>
        <h1>Content</h1>
        <h1>Footer</h1>
    </div>
  )
}