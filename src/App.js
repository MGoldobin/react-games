import Game from './components/XOX/Game'
import Main from './components/Main/Main.jsx'
import RPS from './components/RPS/RPS.jsx'
import Pairs from './components/Pairs/Pairs.jsx'
import Error from './components/Error/Error.jsx'
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/xox" component={Game} />
        <Route path="/rps" component={RPS} />
        <Route path="/pairs" component={Pairs} />
        <Route path="/404" component={Error} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default App