import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { observer } from 'mobx-react-lite'
import store from '../../store/theme'

const StyledCard = styled.div`
	border: 2px solid ${props => props.theme.borderColor};
	text-align: center;
	padding: 5px;
	margin: 0;
	cursor: pointer;
	box-sizing: border-box;

	&:hover {
		background-color: ${props => props.hoverBgColor};
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

const Card = observer(({item, newGame, handleClick}) => {
	return (
		<StyledCard hoverBgColor="#64BF44" theme={store.theme} onClick={item.done ? ()=>{} : handleClick}>
			{
				item.done 
				? <Img src={item.url} alt={item.name}/>
				: <Back />
			}
		</StyledCard>
	)
})

export default Card