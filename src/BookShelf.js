import React, { Component } from 'react';
import BookList from './BookList';
import './App.css';


class BookShelf extends Component {
  
  constructor(props){
    super(props);    
  }

   
  render() {

    return (<div className="list-books-content">
                <div>
                    <BookList />                    
                </div>
            </div>)
  }
}

export default BookShelf;
