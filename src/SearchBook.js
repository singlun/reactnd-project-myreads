import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';


class SearchBook extends Component {
  
  constructor(props){
    super(props);  
    this.state ={showSearchPage: false}    
  }

   
  render() {

    return ( 
      		<SearchBar showSearchPage={this.state.showSearchPage}/>
    		)
  }
}

export default SearchBook;
