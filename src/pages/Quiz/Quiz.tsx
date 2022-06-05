import React from 'react'
import store from '../../store/theme'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

const GamePage = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color};
  position: relative;
`

const Quiz = observer(() => {
	return (
		<GamePage theme={store.theme}>
			Завтра буду...
		</GamePage>
	)
})

export default Quiz