import React, { useContext } from 'react';

import './header.style.css';
import { DashboardContext } from '../../contexts/dashboardContext'
import { 
  logo, 
  search,
  library,
  avatar,
  notification,
  badge,
  back,
  responsiveLogo,
  hamburger
} from '../../assets';

const Header = ({props}) => {

  const { hideShowSideBar } = useContext(DashboardContext);

  const updateSidebar = () => {
    if(document.documentElement.clientWidth < 1112) {
      hideShowSideBar()
    }
  }
  
  return (
    <div className="page-header">
    <div className="container navbar-top">

       <button className="back">
        <img src={back} alt="Back Image"  />
       </button>
      
        <button className="hamburger" onClick={ updateSidebar }>
          <img src={hamburger} alt="Hamburger"/>
        </button>
        <a href="#" className="navbar-brand">
          <img src={logo} alt="Logo image" id="logo" />
          <img src={responsiveLogo} alt="Logo image" id="responsive-logo"  />
        </a>

        <form className="search-box" id="search-box">
          <input id="search-input" list="" name="books" placeholder="Search books, genres, authors etc." />

          {/* <datalist id="books">
            <option value="Internet Explorer">Internet Explorer</option>
            <option>Built to Last - <span>Jim Collins, Jerry I. Poras..</span></option>
            <option>Four Steps to The Epiphany - James McEnroe</option>
            <option>The Lean Start Up - Eric Reiss</option>
            <option>No Excuses - Brian Tracy</option>
          </datalist> */}

          <button className="search-btn">
            <img src={search} alt="Search Icon" />
          </button>
          <button id="responsive-search-btn">
            <img src={search} />
          </button>
        </form>

        <nav className="navbar">
          <ul className="nav-ul">
              <li>
                <a href="#">
                  <img src={library} alt="Library Icon" />
                </a>
              </li>
              <li className="badge">
                 <img src={notification} alt="Notification Icon" />
                 <img src={badge} alt="Badge Icon" id="badge" />
              </li>
              <li><a href="#"><img src={avatar} alt="Avatar Icon" /></a></li>
          </ul>
        </nav>
    </div>   
  </div>
 )
}

export default Header;