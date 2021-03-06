import React, { Component } from 'react';

class Book extends Component {
  
  state = {
    isEditable: false
  };

  changeKeyHandler = (event) => {
    if (event.key == 'Enter') {
      this.setState({
        isEditable: false
      })
    }
  }
  
  render() {
    
    let output = this.state.isEditable ?
      <input onChange={ e => this.props.changeHandler(this.props.book.id, e.target.value) }
             onKeyPress={ this.changeKeyHandler }
             type="text" placeholder="Enter Name" value={ this.props.book.name }/>
      : <p>{ this.props.book.name }</p>

    return (
      <li className='list-group-item d-flex'>
        { output }
        <span className="ml-auto"> { this.props.book.price} </span>
        <div className="mx-4">
          <span onClick={ () => this.setState({isEditable:true})}>
            <i style={{cursor:'pointer'}} className="fas fa-edit mr-3"></i>
          </span>
          <span onClick={ () => this.props.deleteHandler(this.props.book.id)}>
            <i style={{cursor:'pointer'}} className='fas fa-trash'></i>
          </span>
        </div>
      </li>
    )
  }
}

export default Book;
