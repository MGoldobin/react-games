import Game from './components/XOX/Game'
import Main from './components/Main/Main'
import RPS from './components/RPS/RPS'
import Memo from './components/Memo/Memo'
import Error from './components/Error/Error'
import Tetris from './components/Tetris/Tetris'
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
    <StyledApp theme={store.theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/xox" component={Game} />
          <Route path="/rps" component={RPS} />
          <Route path="/memo" component={Memo} />
          <Route path="/tetris" component={Tetris} />
          <Route path="/404" component={Error} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  )
})

export default App