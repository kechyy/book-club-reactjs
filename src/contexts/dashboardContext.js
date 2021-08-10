import React, { createContext, useState } from 'react';

export const DashboardContext = createContext({});

const DashboardContextProvider = ({children}) => {
   const displaySidebar = document.documentElement.clientWidth < 1112 ? "none" : "block"
 const [dashboardObj, setDashboardObj] = useState({ 
     recentBooks: [
     {
       id: 1,
       status: 'Available',
       title: 'The Effective Engineer',
       date: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       image: 'effective-engineer.svg'
     },
     {
       id: 2,
       status: 'Available',
       title: 'Built To Last',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'built-to-last.svg'
     },
     {
       id: 3,
       status: 'Available',
       title: 'The Lean Startup',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-04-01T01:10:00Z',
       image: 'the-lean-starup.svg'
     },
     {
       id: 4,
       status: 'Available',
       title: 'Effective Python',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'effective-python.svg'
     },
     {
       id: 5,
       status: 'Available',
       title: 'Big Magic',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'big-magic.svg'
     }
   ],
   allBooks: [
     {
       id: 6,
       status: 'Available',
       title: 'The Effective Engineer',
       date: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       image: 'effective-engineer.svg'
     },
     {
       id: 7,
       status: 'Available',
       title: 'Built To Last',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'built-to-last.svg'
     },
     {
       id: 8,
       status: 'Available',
       title: 'The Lean Startup',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-04-01T01:10:00Z',
       image: 'the-lean-starup.svg'
     },
     {
       id: 9,
       status: 'Available',
       title: 'Effective Python',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'effective-python.svg'
     },
     {
       id: 10,
       status: 'Available',
       title: 'Big Magic',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'big-magic.svg'
     },
     {
       id: 11,
       status: 'Available',
       title: 'Big Magic',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'big-magic.svg'
     },
     {
       id: 12,
       status: 'Available',
       title: 'Big Magic',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'big-magic.svg'
     },
     {
       id: 13,
       status: 'Available',
       title: 'Big Magic',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-04-01T01:10:00Z',
       image: 'big-magic.svg'
     },
     {
       id: 14,
       status: 'Available',
       title: 'Big Magic',
       year: '2009',
       author: 'Edmond Lau',
       description: 'Motivational',
       rating: '4.0',
       date: '2021-01-01T01:10:00Z',
       image: 'big-magic.svg'
     }
  ],

  sideBar: displaySidebar

 })

 const hideShowSideBar = () => {
  setDashboardObj({ ...dashboardObj, sideBar: dashboardObj.sideBar =="none" ? "block" : "none" })
 }

return (
   <DashboardContext.Provider value={{ ...dashboardObj, hideShowSideBar }}>
     { children }
   </DashboardContext.Provider>
  )
}

export default DashboardContextProvider;