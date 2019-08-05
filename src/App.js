import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import GithubState from './context/github/GithubState'
import Developer from './components/pages/Developer/Developer'
import Profile from './components/pages/Developer/Profile/Profile'
import Navbar from './components/Layout/Navbar'
import Home from './components/pages/Home'

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/developer' exact component={Developer} />
          <Route path='/user/:id' exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
