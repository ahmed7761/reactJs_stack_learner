import React, {Component} from 'react';
import './App.css';

import First from "./first/First";
import Counter from "./first/Counter";
import Stateless from "./Stateless";
import Books from './books/Books';

class App extends Component {

  state = {
    person: [
      { name: 'Sharif 2', email: 'sharif@gmail.com' },
      { name: 'Ahmed 2', email: 'hasan@gmail.com' }
    ],

    inputedName: '',

    books: [
      {
        id: 1,
        name: 'Java',
        price: 20
      },
      {
        id: 2,
        name: 'Javascript',
        price: 22
      },
      {
        id: 3,
        name: 'C++',
        price: 30
      },
      {
        id: 4,
        name: 'PHP',
        price: 40
      }
    ]
  };

  deleteBook = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
        books: newBooks
    })
  };

  clickHandler = () => {
    alert('clicked')
  };

  inputHandler = (event) => {
    this.setState({
      inputedName : event.target.value
    })
  };

  changeHandler = (id, name) => {
    let newBooks = this.state.books.map(book => {
      if(id == book.id) {
        return {
          ...book ,
          name: name
        }
      }
      return book
        });

    this.setState({
      books: newBooks
    })
  };

  render() {

    let cssObj = {
      color: 'yellow',
      textAlign: 'center'
    };

    return (
      <div className="App">
        <h1>Welcome { 10-2 }</h1>
        <First name="Sharif" email="sharif@gmail.com"/>
        <First name="Ahmed" email="hasan@gmail.com"/>
        <Counter/>

        { this.state.person.map((people, index) => {
          return <First key={ index } name={ people.name } email={ people.email } />
        })}

        <input type="text" placeholder="Enter your Name" onChange={ this.inputHandler } value={ this.state.name }/>
        <button className="btn btn-primary" onClick={ this.clickHandler }>
          Click Me
        </button>
        { this.state.inputedName ? <p>Hello Mr. {this.state.inputedName} </p> : '' }

        <Stateless name="Sharif" />

        <h1 className="styled">Styled Text</h1>
        <h1 style={{ color: 'green', textAlign: 'right' }}>Styled Text inline css</h1>
        <h1 style={ cssObj }>Styled Text in-file css</h1>

        <Books deleteHandler={ this.deleteBook.bind(this) }
               changeHandler={ this.changeHandler.bind(this) }
               books={ this.state.books } />
      </div>
    );
  }
}
export default App;
