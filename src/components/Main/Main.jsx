import React from 'react'
import GameCard from './GameCard'
import Footer from './Footer'
import styles from './Main.module.css'

const games = [
	{ name: "Tic-Tac-Toe", img: "./tictactoe.svg", to: "/xox", color: "#F85623" },
	//{ name: "2048", img: "./2048.svg", to: "/" },
	//{ name: "Minesweeper", img: "./soon.jpg", to: "/" },
	//{name:"Developing...", img:"./soon.jpg", to: "/"},
	{name:"Tetris", img:"./soon.jpg", to: "/tetris", color: "#F00"},
	{ name: "Find a couple", img: "./pairs.svg", to: "/pairs", color: "#64BF44" },
	{ name: "Rock, paper, scissors!", img: "./RPS.svg", to: "/rps", color: "#0672DE" }
]

const Main = () => {
	document.title = "Menu"

	return (
		<div className={styles.Main}>
			<header className={styles.Header}>
				<h1 className={styles.Title}>REACT games</h1>
			</header>
			<div className={styles.Menu}>
				{
					games.map((game) => (<GameCard name={game.name} img={game.img} key={game.name} to={game.to} color={game.color} />))
				}
			</div>
			<Footer />
		</div>
	)
}

export default Main
