import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Board from './Board.jsx'
import Select from '../UI/Select.jsx'
import Popup from '../UI/Popup.jsx'
import whoWinner from '../../vendor/winnerXOX.js'
import styles from './Game.module.css'

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
		<div className={styles.GamePage}>
			<div className={styles.Header}>
				<NavLink className={styles.BackBtn} to="/"></NavLink>
				<h1 className={styles.Title}>Tic Tac Toe</h1>
			</div>
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
			<button className={styles.Button} onClick={startNewGame}>Начать заново</button>
		</div>
	);
}

export default Game
