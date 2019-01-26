import React from 'react'
import BookList from './BookList';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [],
    shelf : ['currentlyReading','read','wantToRead', 'none'],
    shelfLongName : ['Currently Reading','Read','Want To Read', 'None']
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
            books            
          }))
      }).then(() => {
        this.cloneBooks = this.cloneBooks();
      })  
  }  

  handleSubmit = (key, shelf) => {

    this.cloneBooks = this.updateBookShelf(key, shelf);
    
    this.setState({
      books: this.cloneBooks
    })
  }  


  handleAddNew = (key, shelf, addedBook) => {
       
    const checkBook = this.cloneBooks.filter(cb => cb.id === key);

    if (checkBook.length === 0){      
      if (addedBook.length === 1) 
              this.cloneBooks = [...this.cloneBooks, addedBook[0]];
    }
    else {
      this.cloneBooks = this.updateBookShelf(key, shelf);
    }

    this.setState({
      books: this.cloneBooks
    })    
  }  

  updateBookShelf = (key, shelf) => {
      let tempBooks = [];
      tempBooks = this.cloneBooks.map(cb => {
        if (cb.id === key) {
          cb.shelf = shelf;                      
        }
        return cb;
      });  
      return tempBooks;
  }  

  cloneBooks = () => {
    let tempBooks = [];
    this.state.books.forEach (book => {
        const singleBook = {...book};
        tempBooks = [...tempBooks, singleBook];
    })
    return tempBooks;
  }

  render() {
    console.log(JSON.stringify(this.state));
    return (      
      <div className="app">
          <Route exact path='/' render={() => (
                  <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      {this.state.shelf.map((shelf, index) => (
                        <BookList onhandleChange={this.handleSubmit} books={this.state.books} shelf={shelf} shelfName={this.state.shelfLongName[index]}/>
                      ))} 
                    </div>
                  </div>
                  <div>
                    <Link
                        to='/searchBook'
                        className='open-search'
                    >Add a book</Link>                    
                  </div>
                </div> 
          )} />  
          <Route path='/searchBook' render={() => (
                <SearchBook onhandleAddNew={this.handleAddNew}  books={this.state.books}/>
          )} />   
      </div>
    )
  }
}

export default BooksApp
