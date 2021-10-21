import React, { useState } from 'react'
import '../../style/RPS/RPS.css'
import { NavLink } from 'react-router-dom'
import Smile from './Smile'
import Popup from '../UI/Popup'
import whoWinner from '../../vendor/winnerRPS'

const smiles = [
	{ name: "Rock", url: "./rock.png" },
	{ name: "Paper", url: "./paper.png" },
	{ name: "Scissors", url: "./scissors.png" }
]

const Rps = () => {
	document.title = "RPS"
	const [computerResult, setComputerResult] = useState({ name: "...", url: "./undefined.png" })
	const [playerResult, setPlayerResult] = useState({ name: "Rock", url: "./rock.png" })
	let rand = 0

	const startNewGame = () => {
		setComputerResult({ name: "...", url: "./undefined.png" })
	}

	const handleClick = (name, url) => {
		rand = Math.floor(Math.random() * 3)
		setComputerResult({ name: smiles[rand].name, url: smiles[rand].url })
		setPlayerResult({ name: name, url: url })
	}

	return (
		<div className="rps">
			<div className="rps__header">
				<NavLink className="rps__backBtn" to="/">На главную</NavLink>
				<h1 className="rps__title">Rock, paper, scissors</h1>
			</div>
			<ul className="rps__rules">
				<li className="rps__rule">The rock beats the scissors</li>
				<li className="rps__rule">The scissors beats the paper</li>
				<li className="rps__rule" >The paper beats the rock</li>
			</ul>
			<div className="rps__board">
				<div className="rps__gameField">
					{
						smiles.map(smile => (
							<Smile
								handleClick={handleClick}
								key={smile.name}
								name={smile.name}
								url={smile.url}
								disabled={null}
							/>
						))
					}
				</div>
				{
					whoWinner(playerResult.name, computerResult.name) ? <Popup result={whoWinner(playerResult.name, computerResult.name)} startNewGame={startNewGame} /> : null
				}
				<div className="rps__gameField">
					<Smile
						name={computerResult.name}
						url={computerResult.url}
						disabled="none"
					/>
				</div>
			</div>
		</div>
	)
}

export default Rps