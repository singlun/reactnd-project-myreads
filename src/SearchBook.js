import React, { Component } from 'react';
import SearchBar from './SearchBar';
import * as BooksAPI from './BooksAPI'
import './App.css';


class SearchBook extends Component {
  
  constructor(props){
    super(props);  
    this.state = {
        query: '',
        needFetch: true
    }; 
    this.overAllResult = {};    
  }

  onhandleChange = (key, bookshelf) => {
      const addedBook = this.addBookShelf(key, bookshelf)
  
      if (this.props.onhandleAddNew) {
        this.props.onhandleAddNew(key, bookshelf, addedBook)
      }
    }   

  onhandleSearch = (event) => { 
    event.preventDefault();
    if (event.target.value.length === 0) return; 
    this.setState(({ 
      query: event.target.value
    	}), () => {      		           
          this.searchBooks(this.state.query) 
      });  
  };


  searchBooks = (query) => {
    BooksAPI.search(query)
    .then((searchResults) => {
      this.overAllResult= searchResults;
      for (let i=0; i < this.overAllResult.length; i++){
            this.props.books.forEach((book)=>{
                if (book.id === this.overAllResult[i].id){
                    this.overAllResult[i].shelf = book.shelf;
                }
            })            
        } 
      this.forceUpdate();
    })
  }

  addBookShelf = (key, shelf) => {
    let addedBook = this.overAllResult.filter(sb => sb.id === key);
    if (addedBook.length > 0) addedBook[0].shelf = shelf;

    return addedBook;
  }

  render() {
    return ( 
      		<SearchBar searchResults={this.overAllResult} showSearchPage={this.state.showSearchPage} onhandleSearch={this.onhandleSearch} onhandleChange={this.onhandleChange}/>
    		)
  }
}

export default SearchBook;
