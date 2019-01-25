import React, { Component } from 'react';
import BookStatus from './BookStatus';
import './App.css';


class Book extends Component {
  
  constructor(props){
    super(props);         
  }

  onhandleChange = (bookshelf) => {
 
   if (this.props.onhandleChange) {
      this.props.onhandleChange(this.props.bookId, bookshelf);
   }
  }    
   
  render() {

    const {singlebook, shelf, bookId} = this.props;

    var divStyle = {
      width: 128,
      backgroundImage: 'url(' + singlebook.imageLinks.thumbnail + ')',
      height: 193      
    };


    return (
            <li key={bookId}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={divStyle}></div>
                  <BookStatus shelf={shelf} onhandleChange={this.onhandleChange}/>
                </div>
                <div className="book-title">{singlebook.title}</div>
                <div className="book-authors">{singlebook.authors}</div>
              </div>
            </li>                                        
    		)
  }
}

export default Book;
