import { observer } from 'mobx-react-lite'
import React/*, { useState } */from 'react'
//import Popup from '../UI/Popup.jsx'
import Header from '../UI/Header'
import styled from 'styled-components'
import store from '../../store/theme'

const GamePage = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: ${props => props.theme.color};
	position: relative;
`

const Content = styled.div`
	display: flex;
	font-size: 36px;
`

const Tetris = observer(() => {
	return (
		<GamePage theme={store.theme}>
			<Header to="/" title="Tetris"/>
			<Content>
				<p>Скоро заработаю...</p>
			</Content>
			{
				//<button>Начать заново</button>
			}
		</GamePage>
	)
})

export default Tetris