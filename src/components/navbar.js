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

    function enterMenu(event) {
      if (event.key === 'Enter') {
        setToggleMenu(prevState => !prevState)
      }
    }

    function enterSearch(event) {
      if (event.key === 'Enter') {
        setSearch(prevState => !prevState)
      }
    }

    function handleScroll() {
      console.log(scroll)
      if(window.scrollY > 20) {
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
            <li tabindex="0">
              Home
            </li>
            <li tabindex="0">
              Region
            </li>
            <li tabindex="0">
              Educational
            </li>
            <li tabindex="0">
              Pros-Live
            </li>
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
            <li className="profile-list"  tabindex="0" onClick={toggleSearch} onKeyDown={enterSearch}>
              Search
            </li>
            <li className="profile-list" tabindex="0">
              Notifications
            </li>
            <li className="profile-list" tabindex="0" onClick={openMenu} onKeyDown={enterMenu}>
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