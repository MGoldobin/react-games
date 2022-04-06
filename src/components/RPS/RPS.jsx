
import React, { useState } from 'react'
import styled from 'styled-components'
import Smile from './Smile'
import Winner from './Winner'
import Header from '../UI/Header'

const StyledRps = styled.div`
	min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #000;
`

const Rules = styled.ul`
	list-style: hiragana-iroha;
	margin: 30px 0 50px;
`

const Rule = styled.li`
	margin-top: 10px;
`

const Board = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 90%;
`

const GameField = styled.div`
	display: flex;
	flex-direction: row;
	width: 45%;
	justify-content: center;
`

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
		<StyledRps>
			<Header to="/" title="Rock, scissors, paper"/>

			<Rules>
				<Rule>The rock beats the scissors</Rule>
				<Rule>The scissors beats the paper</Rule>
				<Rule>The paper beats the rock</Rule>
			</Rules>

			<Board>
				<GameField>
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
				</GameField>

				<Winner pName={playerResult.name} cName={computerResult.name} startNewGame={startNewGame} />
				
				<GameField>
					<Smile
						name={computerResult.name}
						url={computerResult.url}
						disabled="none"
					/>
				</GameField>
			</Board>
		</StyledRps>
	)
}

export default Rps
