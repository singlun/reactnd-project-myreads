import React from 'react'
// import * as BooksAPI from './BooksAPI'
import BookList from './BookList';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI'
import './App.css'

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
    shelfLongName : ['Currently Reading','Read','Want To Read', 'None'],
    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
            books            
          }))
      })   
  }  

  handleSubmit = (key, shelf) => {  

    let cloneBooks = this.cloneBooks();

    cloneBooks = cloneBooks.map(cb => {
                    if (cb.id === key) {
                      cb.shelf = shelf;                      
                    }
                    return cb;
                  });
    
    this.setState({
      books: cloneBooks
    })
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

    return (
      <div className="app">
          {this.state.showSearchPage === true && (
             <SearchBook books={this.state.books}/>
          )}
          {this.state.showSearchPage === false && (
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
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>             
          )}
      </div>
    )
  }
}

export default BooksApp
