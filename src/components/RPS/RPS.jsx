import React/*, { useState }*/ from 'react'
import '../../style/RPS/RPS.css'
import { NavLink } from 'react-router-dom'
import Smile from './Smile'

const smiles = [
	{ name: "Rock", url: "./rock.png" },
	{ name: "Paper", url: "./paper.png" },
	{ name: "Scissors", url: "./scissors.png" }
]

const Rps = () => {
	document.title = "RPS"
	//const [computerResult, setComputerResult] = useState({ name: "...", url: "./undefined.png" })
	//const [playerResult, setPlayerResult] = useState({ name: "Rock", url: "./rock.png" })

	const chooseAndGame = (name, url) => {
		console.log(name, url)
		/*
		setPlayerResult(name, url)
		const rand = Math.floor(Math.random() * 3)
		setComputerResult(smiles[rand].name, smiles[rand].url)*/
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
				<li className="rps__rule">The paper beats the rock</li>
			</ul>
			<div className="rps__board">
				<div className="rps__gameField">
					{
						smiles.map(smile => (
							<Smile
								key={smile.name}
								name={smile.name}
								url={smile.url}
								onClick={chooseAndGame(smile.name, smile.url)}
							/>
						))
					}
				</div>
				<div className="rps__gameField">
					<Smile name="..." url="./undefined.png" />
				</div>
			</div>
		</div>
	)
}

export default Rps