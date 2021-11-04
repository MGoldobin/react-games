import React from 'react'
import GameCard from './GameCard'
import Header from './Header'
import Footer from './Footer'
import '../style/Main.css'

const games = [
	{ name: "Tic-Tac-Toe", img: "./tictactoe.svg", to: "/xox", color: "orange" },
	//{ name: "2048", img: "./2048.svg", to: "/" },
	//{ name: "Minesweeper", img: "./soon.jpg", to: "/" },
	//{name:"Developing...", img:"./soon.jpg", to: "/"},
	{ name: "Find a couple", img: "./pairs.svg", to: "/pairs", color: "green" },
	{ name: "Rock, paper, scissors!", img: "./RPS.svg", to: "/rps", color: "blue" }
]

const Main = () => {
	document.title = "Menu"

	return (
		<div className="main">
			<Header />
			<div className="main__menu">
				{
					games.map((game) => (<GameCard name={game.name} img={game.img} key={game.name} to={game.to} color={game.color} />))
				}
			</div>
			<Footer />
		</div>
	)
}

export default Main
