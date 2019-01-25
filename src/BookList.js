import React, { Component } from 'react';
import Book from './Book';
import './App.css';


class BookList extends Component {
  
  constructor(props){
    super(props);    
  }

   
  render() {

    return (  <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">   
                      <Book />
                    </ol>
                  </div>
              </div>
    		)
  }
}

export default BookList;
