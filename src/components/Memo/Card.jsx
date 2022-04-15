import React from 'react'
import styled from 'styled-components'
import store from '../../store/theme'
import { observer } from 'mobx-react-lite'

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

const Img = styled.img`
	width: 100px;
	height: 100px;
	padding: 0;
	margin: 0;
  display: block;
`

const Card = observer(({item}) => {
	return (
		<StyledCard hoverBgColor="#64BF44" theme={store.theme}>
			<Img src={item.url} alt={item.name} />
		</StyledCard>
	)
})

export default Card