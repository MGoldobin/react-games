import Game from './components/XOX/Game'
import Main from './components/Main/Main.jsx'
import RPS from './components/RPS/RPS.jsx'
import Pairs from './components/Pairs/Pairs.jsx'
import Error from './components/Error/Error.jsx'
import Tetris from './components/Tetris/Tetris'
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import store from './store/theme'
import { observer } from 'mobx-react-lite'

const StyledApp = styled.div`
  width: 100%;
  heigth: 100%; 
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
`

const App = observer(() => {
  return (
    <BrowserRouter>
      <StyledApp theme={store.theme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/xox" component={Game} />
          <Route path="/rps" component={RPS} />
          <Route path="/pairs" component={Pairs} />
          <Route path="/tetris" component={Tetris} />
          <Route path="/404" component={Error} />
          <Redirect to="/404" />
        </Switch>
      </StyledApp>
    </BrowserRouter>
  )
})

export default App