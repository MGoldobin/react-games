import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../UI/Header'
import Button from '../UI/Button'

const StyledPairs = styled.div`
	min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #000;
`

const Content = styled.div`
	display: flex;
	gap: 20px;
`

const Info = styled.div`
	display: flex;
	flex-direction: column;
`

const Field = styled.div`

`

const Card = styled.div`

`

function shuffle(array) {
	return array.concat(array).sort(() => Math.random() - 0.5)
}

const arr = [
	{ name: "JS", url: "./JS.png" },
	{ name: "Python", url: "./Python.png" },
	{ name: "C#", url: "./C#.jpg" },
	{ name: "C++", url: "./C++.jpg" },
	{ name: "React", url: "./React.png" },
	{ name: "PHP", url: "./PHP.png" },
	{ name: "CSS", url: "./CSS.jpg" },
	{ name: "HTML", url: "./HTML.png" }
]

const Pairs = observer(() => {
	document.title = "Find a couple"
	const [pairs, setPairs] = useState(shuffle(arr))

	const startNewGame = () => {
		//setFields([])
		setPairs(shuffle(arr))
	}

	return (
		<StyledPairs>
			<Header to='/' title='Find a couple'/>
			<Content>
				<Field>
					{
						pairs.map((pair, i) =>
							<Card key={i}>
								<h1>{pair.name}</h1>
							</Card>
						)
					}
				</Field>

				<Info>
					<Button onClick={startNewGame} title="Начать заново" hoverBgColor="#64BF44" hoverColor="#fff"/>
				</Info>
			</Content>
		</StyledPairs>
	)
})

export default Pairs