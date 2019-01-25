import React, { Component } from 'react';
import Book from './Book';
import './App.css';


class BookList extends Component {
  
  constructor(props){
    super(props);    
  }

  onhandleChange = (key, bookshelf) => {
 
    if (this.props.onhandleChange) {
      this.props.onhandleChange(key, bookshelf)
    }
  }      
   
  render() {

    const {books, shelf, shelfName } = this.props;

    return (
              <div className='bookshelf'>
                  <h2 className='bookshelf-title'>{shelfName}</h2>                             
                  <div className='bookshelf-books'>
                      <ol className='books-grid'>            
                          {books.filter(bookshelf => bookshelf.shelf === shelf).map((book) => {
                              return  <Book bookId={book.id} onhandleChange={this.onhandleChange} singlebook={book} shelf={shelf}/>
                          })}
                      </ol>
                  </div>      
              </div>              
            )
  }
}

export default BookList;
