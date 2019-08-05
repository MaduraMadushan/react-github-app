import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import GithubState from './context/github/GithubState'
import Developer from './components/pages/Developer/Developer'

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <Switch>
          <Route path='/developer' exact component={Developer} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
