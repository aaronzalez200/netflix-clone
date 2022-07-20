import React from 'react'
import Triangle from '../images/triangle.png'
import Eunha from '../images/Eunha.PNG'
import Logo from '../images/Logo.png'
import Search from '../images/search-icon.png'
import Hamburger from '../images/Hamburger.png'

export default function App() {

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [search, setSearch] = React.useState(false)
    const [scroll, setScroll] = React.useState(false)
    const [screen, setScreen] = React.useState('')
    const [toggleNav, setToggleNav] = React.useState(false)

    function handleNavClick() {
      setToggleNav(prevState => !prevState)
    }
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
            <li tabIndex="0">
              Home
            </li>
            <li tabIndex="0">
              Region
            </li>
            <li tabIndex="0">
              Educational
            </li>
            <li tabIndex="0">
              Pros-Live
            </li>
          </ul>
          <div className="links_small">
            <img src={Logo} className="logo"/>
              <div className="nav-col">
                <img className="Hamburger" src={Hamburger} width="50px" onClick={handleNavClick}/>
                {toggleNav && (
                  <ul className="small-nav">
                    <li tabIndex="0">
                    Home
                    </li>
                  <li tabIndex="0">
                    Region
                    </li>
                    <li tabIndex="0">
                    Educational
                  </li>
                  <li tabIndex="0">
                      Pros-Live
                  </li>
                </ul>)}
              </div>
            </div>
          <ul className="profile-nav">
             {search && (
                <div className="input-section">
                  <input type="text" className={search ? "search-bar" : "search-bar-active"} placeholder=' search' width='50px'></input>
                  <button className='button'>
                    <img src={Search} width='70%'/>
                  </button>
                </div>
              )}
            <li className="profile-list"  tabIndex="0" onClick={toggleSearch} onKeyDown={enterSearch}>
              Search
            </li>
            <li className="profile-list" tabIndex="0">
              Notifications
            </li>
            <li className="profile-list" tabIndex="0" onClick={openMenu} onKeyDown={enterMenu}>
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