import React, {useState} from 'react'
import Board from './Board'
import Select from './UI/select'
import '../style/Game.css'
import whoWinner from '../winner.js'

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xMove, setXMove] = useState(true)
	const [firstMove, setFirstMove] = useState('')
	const winner = whoWinner(board)

	const handleClick = (index) => {
		const boardCopy = [...board]
		if(winner || boardCopy[index]) {return }
		boardCopy[index] = xMove ? 'X' : "O"
		setXMove(!xMove)
		setBoard(boardCopy)
	}

	const chooseMove = (choose) => {
		setFirstMove(choose)
		choose.toLowerCase() === "x" ?  setXMove(true) : setXMove(false)
		setBoard(Array(9).fill(null))
	}

	const startNewGame = () => {
		setBoard(Array(9).fill(null))
		setXMove(true)
	}

	return (
		<div className="game-page">
			<h1>Tic Tac Toe</h1> 
			<hr className="game-page__hr"/>
			<Board fields={board} click={handleClick}/>
			<p>{winner ? alert("Победил " + winner) : "Сейчас ходит:" + (xMove ? 'X' : "O")}</p>
			<Select 
				value={firstMove}
				onChange={chooseMove}
				defaultValue="Первый ходит: "
				options={[
					{value: 'X', name: 'X'},
					{value: 'O', name: 'O'}
				]}
			/>
			<button className="game-page__btn" onClick={startNewGame}>Начать заново</button>
		</div>
	);
}

export default Game