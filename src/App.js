import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import PostDetails from './components/PostDetails/PostDetails'
import './App.css'
import {commentsState} from './reducer'

function App() {

  return ( 
    <Router>
          <Header />
      <Switch>
        <div className="App">
        <Route path='/post-details/:id' exact>
          <PostDetails />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        </div> 
      </Switch>
    </Router>
  );
}

export default App;
