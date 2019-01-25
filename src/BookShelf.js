import React, { Component } from 'react';
import BookList from './BookList';
import './App.css';


class BookShelf extends Component {
  
  constructor(props){
    super(props);    
  }

  onhandleChange = (key, bookshelf) => {
 
    if (this.props.onhandleChange) {
      this.props.onhandleChange(key, bookshelf)
    }
  } 
   
  render() {
    const {books,shelf,shelfName} = this.props;
    return (
            <BookList onhandleChange={this.onhandleChange}  books={books} shelf={shelf} shelfName={shelfName}/>
           )
  }
}

export default BookShelf;
