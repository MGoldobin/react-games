import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../UI/Header'
import Button from '../UI/Button'
import Card from './Card'
import store from '../../store/theme'

const StyledMemo = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color};
  position: relative;
`

const Content = styled.div`
	margin: 20px 0 0;
	display: flex;
	gap: 50px;
	justify-content: space-between;
	align-items: center;
`
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Arial;
`

const Field = styled.div`
	display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

function shuffle(array) {
	return array.concat(array).sort(() => Math.random() - 0.5)
}

const arr = [
	{ name: "JS", url: "./JS.png" },
	{ name: "Python", url: "./Python.png" },
	{ name: "C#", url: "./CSharp.jpg" },
	{ name: "C++", url: "./СPP.jpg" },
	{ name: "React", url: "./React.png" },
	{ name: "PHP", url: "./PHP.png" },
	{ name: "CSS", url: "./CSS.jpg" },
	{ name: "HTML", url: "./HTML.png" }
]

const Memo = observer(() => {
	document.title = "Memo"
	const [pairs, setPairs] = useState(shuffle(arr))

	const startNewGame = () => {
		//setFields([])
		setPairs(shuffle(arr))
	}

	return (
		<StyledMemo theme={store.theme}>
			<Header to='/' title='Memo'/>
			<Content>
				<Field>
					{
						pairs.map((pair, i) => <Card key={i} item={pair}/>)
					}
				</Field>

				<Info>
					<Button onClick={startNewGame} title="Начать заново" hoverBgColor="#64BF44" hoverColor="#fff"/>
				</Info>
			</Content>
		</StyledMemo>
	)
})

export default Memo