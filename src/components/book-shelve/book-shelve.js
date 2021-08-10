import React, { useContext } from 'react';

import { DashboardContext } from '../../contexts/dashboardContext'

import BookCard from '../book-card'
import Carousel from '../carousel';
import './book-shelve.style.css';


const BookShelve = () => {
 const { recentBooks, allBooks } = useContext(DashboardContext);
 const newRecentBook = recentBooks.map((book) => {
   return (
    <div>
      <BookCard key={book.id} book={book} />
    </div>
   ) 
 })

 const newAllBooks = allBooks.map((book) => {
   return (
    <div>
      <BookCard key={book.id} book={book} />
    </div>
   ) 
 })
 return (
    <>
      <section className="carousel">
       <h3 className="book-category-title">FEATURED BOOKS</h3>
       <div className="main-carousel" >
         <Carousel />
       </div>
      </section>

      <section className="recently-added">
        <h3 className="book-category-title">RECENTLY ADDED</h3>
        <div className="book-display">
          { newRecentBook }
        </div>

        <h3 className="book-category-title">ALL BOOKS</h3>
        <div className="book-display">
            { newAllBooks }
        </div>
      </section>
    </>
    
 )
}

export default BookShelve;

