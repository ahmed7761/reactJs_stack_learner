import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <li className='list-group-item d-flex'>
        <p> { this.props.book.name} </p>
        <span className="ml-auto"> { this.props.book.price} </span>
        <div className="mx-4">
          <span onClick={ () => this.props.deleteHandler(this.props.book.id)}>
            <i style={{cursor:'pointer'}} className='fas fa-trash'></i>
          </span>
        </div>
      </li>
    )
  }
}

export default Book;
