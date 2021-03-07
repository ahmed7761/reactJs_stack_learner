import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Post from "./Post";
import PrivateRoute from "../PrivateRoute";
import Login from "./Login";
import Logout from "./Logout";

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
                    <PrivateRoute path='/posts/:postId' component={Post} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                </Switch>
            </div>
        </BrowserRouter>
      );
  }
}
export default App;
