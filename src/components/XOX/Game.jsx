import React, { useState } from 'react'
import Board from './Board.jsx'
import whoWinner from '../../vendor/winnerXOX.js'
import styled from 'styled-components'
import Header from '../UI/Header'
import Popup from '../UI/Popup'
import Button from '../UI/Button'
import store from '../../store/theme.js'
import { observer } from 'mobx-react-lite'
import Radio from '@mui/material/Radio'

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

const Content = styled.div`
	display: flex;
	gap: 50px;
	justify-content: space-between;
	align-items: center;
`
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Arial;
`

const Turn = styled.div`
	display: flex;
	flex-direction: row;
  justify-content: space-between;
	width: 100%;
`

const LabelRadio = styled.label`
	font-weight: bold;
	font-size: 50px;
`

const Game = observer(() => {
	document.title = "XoX"
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xMove, setXMove] = useState(true)
	const winner = whoWinner(board)


	const handleClick = (index) => {
		const boardCopy = [...board]
		if (winner || boardCopy[index]) { return }
		boardCopy[index] = xMove ? 'X' : "O"
		setXMove(!xMove)
		setBoard(boardCopy)
	}

	const chooseMove = (choose) => {
		setBoard(Array(9).fill(null))
		choose.toLowerCase() === "x" ? setXMove(true) : setXMove(false)
	}

	const startNewGame = () => {
		setBoard(Array(9).fill(null))
		setXMove(true)
	}

	return (
		<GamePage theme={store.theme}>
			<Header to="/" title="Tic Tac Toe"/>
			<Content>
				<Board fields={board} click={handleClick} />
				<Info>
					<Turn>
						<LabelRadio>
							<Radio
								checked={xMove}
								onChange={() => chooseMove('X')}
								value="X"
								name="turn"
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 50,
										color: store.isDarkTheme ? "#fff" : "#000", 
									},
									'&.Mui-checked .MuiSvgIcon-root': {
										color: "#F85623",
									},
								}}
							/>
							X
						</LabelRadio>

						<LabelRadio>
							<Radio
								checked={!xMove}
								onChange={() => chooseMove('O')}
								value="O"
								name="turn"
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 50,
										color: store.isDarkTheme ? "#fff" : "#000",
									},
									'&.Mui-checked .MuiSvgIcon-root': {
										color: "#F85623",
									},
								}}
							/>
							O
						</LabelRadio>
						
					</Turn>

					{winner
						? <Popup result={winner} startNewGame={startNewGame} />
						: null//<p>Сейчас ходит: {(xMove ? 'X' : "O")}</p>
					}
					<Button onClick={startNewGame} title="Начать заново" hoverBgColor="#F85623"/>
				</Info>
			</Content>
		</GamePage>
	)
})

export default Game
