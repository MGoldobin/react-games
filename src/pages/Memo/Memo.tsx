import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Card from './Card'

import store from '../../store/theme'
import { MEMO_LIST } from '../../utils/constants/constants'
import { MemoCard } from '../../utils/types/MemoCard'
import { shuffleDoubleArray } from '../../utils/functions/shuffleArray'
import Popup from '../../components/Popup'

const StyledMemo = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color.primary};
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

const Memo = observer(() => {
	document.title = "Memo"
	const [pairs, setPairs] = useState<MemoCard[]|[]>([])
	const [turnCount, setTurnCount] = useState<number>(0)
	const [countPairs, setCountPairs] = useState<number>(8)
	const [choiceOne, setChoiceOne] = useState<MemoCard|null>(null)
	const [choiceTwo, setChoiceTwo] = useState<MemoCard|null>(null)

	const startNewGame = () => {
		const arr = shuffleDoubleArray(MEMO_LIST).map((card, i) => ({...card, id: i}))
		setPairs(arr)
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurnCount(0)
		setCountPairs(8)
	}

	const handleChoiceClick = (card: MemoCard) => {
		if (choiceOne===null) setChoiceOne(card) 
		else setChoiceTwo(card)
	}

	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurnCount(prev => prev +1)
	}

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setTimeout(() => {
				if (choiceOne.url === choiceTwo.url) {
					setPairs(prev => prev.map(card => (card.url === choiceOne.url) ? {...card, done: true} : card))
					setCountPairs(prev => prev - 1)
					console.log(countPairs)
				}
				resetTurn()
			}, 500)
		}
	}, [choiceOne, choiceTwo])


	return (
		<StyledMemo>
			<Header to='/' title='Memo'/>
			<Content>
				<Field style={{
					display: pairs.length===0 ? "none" : "grid"
				}}>
					{
						pairs.map((pair, i) => 
							<Card 
								key={i} 
								item={pair} 
								handleChoiceClick={handleChoiceClick}
								choiceOne={choiceOne}
								choiceTwo={choiceTwo}
							/>
						)
					}
				</Field>

				<Info>
					<Button 
						onClick={startNewGame} 
						title={pairs.length===0 ? "New game" : "Reset"} 
						hoverBgColor="#64BF44" 
						hoverColor="#fff"
					/>
					{
						pairs.length===0 ? null : `Total turn count: ${turnCount}`
					}
				</Info>
				{
					countPairs
					? null
					:	<Popup 
							result='You are win!!!'
							startNewGame={startNewGame}
						/>
				}

			</Content>
		</StyledMemo>
	)
})

export default Memo