import React, { Component } from 'react';
import './App.css';


class BookStatus extends Component {
  
  constructor(props){
    super(props);    
  }

  onhandleChange = (e) => {
    e.preventDefault()

    if (this.props.onhandleChange) {
      this.props.onhandleChange(e.target.value)
    }
  }
  

  render() {

    const {shelf} = this.props;

    return (<div className="book-shelf-changer">
                    <select value={shelf} onChange={this.onhandleChange}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
            </div>            
    		)
  }
}

export default BookStatus;
