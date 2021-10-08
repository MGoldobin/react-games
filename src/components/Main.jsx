import React from 'react'
import GameCard from './GameCard'
import { NavLink } from 'react-router-dom'

const games = [
	{name: "Tic-Tac-Toe", img: "./xox.png", to: "/xox"},
	{name:"2048", img:"./soon.jpg", to: "/"},
	{name:"Minesweeper", img:"./soon.jpg", to: "/"},
	{name:"Developing...", img:"./soon.jpg", to: "/"}
]

const Main = () => {
	return (
		<div className="main">
      <NavLink to="/"className="main__title">React-games</NavLink> 
      <div className="main__menu">
				{
					games.map((game)=>(<GameCard name={game.name} img={game.img} key={game.name} to={game.to}/>))
				}
      </div>
    </div>
	)
}

export default Main
