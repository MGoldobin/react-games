import React, { useState } from 'react'
import Board from './Board.jsx'
import Select from '../../UI/Select.jsx'
import '../../style/XOX/Game.css'
import whoWinner from '../../vendor/winner.js'
import Popup from './Popup.jsx'
import { NavLink } from 'react-router-dom'

const Game = () => {
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
		<div className="game-page">
			<div className="game-page__header">
				<NavLink className="game-page__backBtn" to="/">На главную</NavLink>
				<h1 className="game-page__title">Tic Tac Toe</h1>
			</div>
			<Board fields={board} click={handleClick} />
			{winner ? <Popup winner={winner} startNewGame={startNewGame} /> : <p>Сейчас ходит: {(xMove ? 'X' : "O")}</p>}

			<Select
				value={firstMove}
				onChange={chooseMove}
				defaultValue="Первый ходит: "
				options={[
					{ value: 'X', name: 'X' },
					{ value: 'O', name: 'O' }
				]}
			/>
			<button className="game-page__btn" onClick={startNewGame}>Начать заново</button>
		</div>
	);
}

export default Game