import Game from './components/XOX/Game.jsx'
import Main from './components/Main.jsx'
import RPS from './components/RPS/RPS.jsx'
import Pairs from './components/Pairs/Pairs.jsx'
import e404 from './components/e404.jsx'
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
        <Route path="/404" component={e404} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default App