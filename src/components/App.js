import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Post from "./Post";

class App extends Component {

  render() {
      return (
          <BrowserRouter>
            <div className="App container">
                <h1>React Router</h1>
                <Nav/>
                <Switch>
                    <Route exact path='/' render={() =>{
                        return <Home name="Sharif" />
                    }} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/posts/:postId' component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
      );
  }
}
export default App;
