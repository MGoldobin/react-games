import React, { useState } from 'react'
import Board from './Board.jsx'
import Select from '../UI/Select.jsx'
import Popup from '../UI/Popup.jsx'
import whoWinner from '../../vendor/winnerXOX.js'
import styled from 'styled-components'
import Header from '../UI/Header.jsx'
import store from '../../store/theme.js'
import { observer } from 'mobx-react-lite'

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

const Button = styled.button`
  border: 2px solid #F85623;
  background-color: #fff;
  border-radius: 20px;
  margin: 10px 0;
  height: 50px;
  width: 200px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  text-align: center;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 320px) {
		padding: 0;
	}
`

const Game = observer(() => {
	document.title = "XoX"
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xMove, setXMove] = useState(true)
	const [firstMove, setFirstMove] = useState('')
	const winner = whoWinner(board)


	const handleClick = (index) => {
		const boardCopy = [...board]
		if (winner || boardCopy[index]) { return }
		boardCopy[index] = xMove ? 'X' : "O"
		setXMove(!xMove)
		setBoard(boardCopy)
	}

	const chooseMove = (choose) => {
		setFirstMove(choose)
		choose.toLowerCase() === "x" ? setXMove(true) : setXMove(false)
		setBoard(Array(9).fill(null))
	}

	const startNewGame = () => {
		setBoard(Array(9).fill(null))
		setXMove(true)
	}

	return (
		<GamePage theme={store.theme}>
			<Header to="/" title="Tic Tac Toe"/>
			<Board fields={board} click={handleClick} />

			{winner
				? <Popup result={winner} startNewGame={startNewGame} />
				: <p>Сейчас ходит: {(xMove ? 'X' : "O")}</p>
			}

			<Select
				value={firstMove}
				onChange={chooseMove}
				defaultValue="Первый ходит: "
				options={[
					{ value: 'X', name: 'X' },
					{ value: 'O', name: 'O' }
				]}
			/>
			<Button onClick={startNewGame}>Начать заново</Button>
		</GamePage>
	)
})

export default Game
