import React/*, { useState } */from 'react'
//import Popup from '../UI/Popup.jsx'
import styled from 'styled-components'
import Header from '../UI/Header'

const GamePage = styled.div`
	
`

const Tetris = () => {
	return (
		<GamePage>
			<Header to="/" title="Tetris"/>

			<button>Начать заново</button>
		</GamePage>
	)
}

export default Tetris