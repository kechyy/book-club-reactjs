import React, { useContext } from 'react';
import Header from '../header';
import Sidebar from '../sidebar';
import './layout.style.css';
import { DashboardContext } from '../../contexts/dashboardContext'

const Layout = ({children}) => {
  const { sideBar } = useContext(DashboardContext);

  const setSidebar = sideBar ? <Sidebar /> : null;
  return (
  <div className="app-container">
   <Header />
   <main className="page-main">
      <div className="container">
        {children}
      </div>
   </main>
   { setSidebar }
  </div>
 )
}

export default Layout;