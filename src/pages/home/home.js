import React from 'react';
import { Layout, BookShelve } from '../../components';
import { DashboardContextProvider } from '../../contexts';


const Home = () => {
 
 return ( 
    <DashboardContextProvider>
      <Layout>
       <BookShelve />
      </Layout>
   </DashboardContextProvider>
 )
}
export default Home;