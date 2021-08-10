import React, { useContext } from 'react';
import './sidebar.style.css';
import {logo, back} from '../../assets';
import { DashboardContext } from '../../contexts/dashboardContext'

const Sidebar = () => {
 const { hideShowSideBar, sideBar } = useContext(DashboardContext);

 return ( 
  <aside className="page-sidebar" style={{display: sideBar}}>
   <div className="sidebar-menu">
     <div className="back" onClick={ hideShowSideBar }>
       <img src={back} alt="" />
     </div>
     <div className="logo">
       <img src={logo} alt="" />
     </div>
     <nav className="nav sidebar-nav">
       <ul className="sidebar-nav-ul">
         
         <li className="active">
           <a href="#"  className="nav-link">
             <span>Home</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>Profile</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>Notifications</span>
             <img id="badge" />
           </a>
         </li>
         <li className="bottom-divider"></li>

         <li className="title"><span>Explore</span></li>
         <li className="nav-title2">
           <a href="#" className="nav-link">
             <span>Books</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>Genres</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>Authors</span>
           </a>
         </li>
          <li className="bottom-divider"></li>

          <li className="title"><span>My Books</span></li>
         <li>
           <a href="#" className="nav-link">
             <span>Queued</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>Currently Borrowed</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>Favourites</span>
           </a>
         </li>
         <li>
           <a href="#" className="nav-link">
             <span>History</span>
           </a>
         </li>
         <li className="bottom-divider"></li>

       </ul>
     </nav>
   </div>
  </aside>
 )

}

export default Sidebar;