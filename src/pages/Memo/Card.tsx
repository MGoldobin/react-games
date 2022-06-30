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

const rotate = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`

const Img = styled.img`
	width: 100px;
	height: 100px;
	padding: 0;
	margin: 0;
  display: block;
	animation: ${rotate} .3s linear 1;
`

const Back = styled.div`
	width: 100px;
	height: 100px;
	padding: 0;
	margin: 0;
`

interface CardProps {
	item: MemoCard
	handleClick: React.MouseEventHandler<HTMLDivElement>
}

const Card = observer(({item, handleClick}: CardProps) => {
	return (
		<StyledCard onClick={(e) => handleClick(e)}>
			{
				item.done 
				? <Img src={item.url} alt={item.name}/>
				: <Back />
			}
		</StyledCard>
	)
})

export default Card