import React, { useState } from 'react'
import Board from './Board.jsx'
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
  border: 2px solid #000;
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
		background-color: rgba(0, 0, 0, .1);
	}

	@media screen and (max-width: 320px) {
		padding: 0;
	}
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

const RadioButton = styled.input`
	heigth: 30px;
	width: 30px;
`

const Turn = styled.div`
	display: flex;
	flex-direction: row;
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
						<label>
							x
							<RadioButton type="radio" name="turn" checked={xMove} onChange={() => chooseMove('X')}/>
						</label>
						<label >
							O
							<RadioButton type="radio" name="turn" checked={!xMove} onChange={() => chooseMove('O')}/>
						</label>
					</Turn>

					{winner
						? <Popup result={winner} startNewGame={startNewGame} />
						: <p>Сейчас ходит: {(xMove ? 'X' : "O")}</p>
					}

					<Button onClick={startNewGame}>Начать заново</Button>
				</Info>
			</Content>
		</GamePage>
	)
})

export default Game
