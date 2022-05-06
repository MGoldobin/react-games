import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
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

const shuffle = array => {
	return array.concat(array).sort(() => Math.random() - 0.5)
}

const arr = [
	{ id: 1, name: "JS", url: "./JS.png", done: false },
	{ id: 2, name: "Python", url: "./Python.png", done: false },
	{ id: 3, name: "C#", url: "./CSharp.jpg", done: false },
	{ id: 4, name: "C++", url: "./СPP.jpg", done: false },
	{ id: 5, name: "React", url: "./React.png", done: false },
	{ id: 6, name: "PHP", url: "./PHP.png", done: false },
	{ id: 7, name: "CSS", url: "./CSS.jpg", done: false },
	{ id: 8, name: "HTML", url: "./HTML.png", done: false }
]

const Memo = observer(() => {
	document.title = "Memo"
	const [pairs, setPairs] = useState(shuffle(arr))
	const [newGame, setNewGame] = useState(false)
	const [prev, setPrev] = useState(-1)

	useEffect(() => {
		setNewGame(false)
	}, [newGame])

	const startNewGame = () => {
		setPairs(shuffle(arr))
		setNewGame(true)
	}

	const handleClick = id => {
		if(prev === -1){
			pairs[id].done = true
			setPairs([...pairs])
			setPrev(id)
		}else{
			check(id)
		}
}

	const check = curr => {
		if(pairs[curr].id === pairs[prev].id){
			pairs[curr].done = true
			pairs[prev].done = true
			setPairs([...pairs])
			setPrev(-1)
		}else{
			pairs[curr].done = false
			pairs[prev].done = false
			setPairs([...pairs])
			setTimeout(() => {
				pairs[curr].done = false
				pairs[prev].done = false
				setPairs([...pairs])
				setPrev(-1)
			}, 1000)
		}
}

	return (
		<StyledMemo theme={store.theme}>
			<Header to='/' title='Memo'/>
			<Content>
				<Field>
					{
						pairs.map((pair, i) => <Card key={i} item={pair} newGame={newGame} onClick={() => handleClick}/>)
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