import React from 'react'
import Triangle from '../images/triangle.png'
import Eunha from '../images/Eunha.PNG'
import Logo from '../images/Logo.png'
import Search from '../images/search-icon.png'

export default function App() {

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [search, setSearch] = React.useState(false)
    const [scroll, setScroll] = React.useState(false)
    function toggleSearch() {
      setSearch(prevState => !prevState)
    }
    function openMenu() {
      setToggleMenu(prevState => !prevState)
    }
    function handleScroll() {
      console.log(scroll)
      if(window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)


    return (
      <nav className={scroll ? "navbar" : "navbar-active"} onScroll={handleScroll}>
          <ul className="links">
            <img src={Logo} className="logo"/>
            <li>Home</li>
            <li>Region</li>
            <li>Educational</li>
            <li>Pros-Live</li>
          </ul>
          <ul className="profile-nav">
             {search && (
                <div className="input-section">
                  <input type="text" className={search ? "search-bar" : "search-bar-active"} placeholder=' search' width='50px'></input>
                  <button className='button'>
                    <img src={Search} width='70%'/>
                  </button>
                </div>
              )}
            <li className="profile-list" onClick={toggleSearch}>
              Search
            </li>
            <li className="profile-list">Notifications</li>
            <li className="profile-list" onClick={openMenu}>
              Profile
            </li>
            {toggleMenu && (
                <div className="menu">
                  <img src={Triangle} className='triangle' width="10px"/>
                  <ul className="menu-items" onMouseLeave={() => setToggleMenu(false)}>
                    <li>Account</li>
                    <li>History</li>
                    <li>Logout</li>
                    <li>? Help Center</li>
                  </ul>
                </div>
              )}
          </ul>
        </nav>
    )
  }