import { observer } from 'mobx-react-lite'
import React/*, { useState } */from 'react'
//import Popup from '../UI/Popup.jsx'
import styled from 'styled-components'
import Header from '../UI/Header'
import store from '../../store/theme'

const GamePage = styled.div`
	min-height: 100vh;
	width: 100vw;
	background-color: ${props => props.theme.backgroundColor};
	display: flex;
	align-items: center;
	flex-direction: column;
	color: ${props => props.theme.color};
	position: relative;
`

const Tetris = observer(() => {
	return (
		<GamePage theme={store}>
			<Header to="/" title="Tetris"/>

			{
				//<button>Начать заново</button>
			}
		</GamePage>
	)
})

export default Tetris