import React from 'react';

import './book-card.style.css';
const BookCard = (props) => {
 const { 
    status, 
    title, 
    author, 
    date, 
    description, 
    rating,
    year,
    image } = props.book

 return (
   <div className="book-card">
     <img src={require(`../../assets/images/book-covers/${image}`).default} alt={description}/>
     <div>
       <ul>
          <li>{ status }</li>
          <li className="book-title">{ title }</li>
          <li>{ author } - { year }</li>
          <li>{ description }</li>
          <li>
              <ul className="ratings">
                <li>
                  <p>Ratings: { rating }</p>
                  <p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star unchecked"></span>
                    <span className="fa fa-star unchecked"></span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fa fa-users"></span> &nbsp; &nbsp;
                    <span className="fa fa-heart-o"></span>
                  </p>
                  <p>31 &nbsp; &nbsp; 29</p>
                </li>
              </ul>
          </li>
        </ul>
     </div>
   </div>
 )
}

export default BookCard;