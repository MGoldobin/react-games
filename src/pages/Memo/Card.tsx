import React from 'react'
import styled, { keyframes } from 'styled-components'
import { observer } from 'mobx-react-lite'

import store from '../../store/theme'
import { MemoCard } from '../../utils/types/MemoCard'

const StyledCard = styled.div`
	background-color: transparent;
  perspective: 1000px;

	border: 2px solid ${props => props.theme.borderColor};
	text-align: center;
	padding: 5px;
	margin: 0;
	cursor: pointer;
	box-sizing: border-box;

	&:hover {
		background-color: #64BF44;
	}
`

const Img = styled.img`
	width: 100px;
	height: 100px;
	padding: 0;
	margin: 0;
  display: block;
`

interface CardProps {
	item: MemoCard
	handleChoiceClick: (card: MemoCard) => void
	choiceOne: MemoCard|null
	choiceTwo: MemoCard|null
	disabled: boolean
}

const Card = observer(({item, handleChoiceClick, choiceOne, choiceTwo, disabled}: CardProps) => {

	const handleClick = (item: MemoCard) => {
		if (!disabled) {
			handleChoiceClick(item)
		}
	}

	return (
		<StyledCard>
			{
				item.done || (choiceOne&&(item.id === choiceOne.id) || choiceTwo&&(item.id === choiceTwo.id))
				? <Img src={item.url} alt={item.name}/>
				:	<Img 
						onClick={() => handleClick(item)}
						src="undefined.png" 
						alt="undefined"
					/>
			}
				
		</StyledCard>
	)
})

export default Card