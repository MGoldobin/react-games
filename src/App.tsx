import Game from './pages/XOX/Game'
import Main from './pages/Main/Main'
import RPS from './pages/RPS/RPS'
import Memo from './pages/Memo/Memo'
import Error from './pages/Error/Error'
import Tetris from './pages/Tetris/Tetris'
import Quiz from './pages/Quiz/Quiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/xox" element={<Game />} />
          <Route path="/rps" element={<RPS />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
})

export default App