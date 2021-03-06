import React, { Component} from 'react'

class First extends Component {
  render() {
    return (
      <div>
        <h1>Name : { this.props.name } </h1>
        <h2>Email : { this.props.email }</h2>
      </div>
    );
  }
}

export default First;
