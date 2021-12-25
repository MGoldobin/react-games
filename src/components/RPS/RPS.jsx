
import React, { useState } from 'react'
import styles from './RPS.module.css'
import { NavLink } from 'react-router-dom'
import Smile from './Smile'
import Winner from './Winner'

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
		<div className={styles.Rps}>
			<div className={styles.Header}>
				<NavLink className={styles.BackBtn} to="/"></NavLink>
				<h1 className={styles.Title}>Rock, paper, scissors</h1>
			</div>
			<ul className={styles.Rules}>
				<li className={styles.Rule}>The rock beats the scissors</li>
				<li className={styles.Rule}>The scissors beats the paper</li>
				<li className={styles.Rule} >The paper beats the rock</li>
			</ul>
			<div className={styles.Board}>
				<div className={styles.GameField}>
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
				<Winner pName={playerResult.name} cName={computerResult.name} startNewGame={startNewGame} />
				<div className={styles.GameField}>
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
