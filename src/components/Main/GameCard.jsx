import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Card = styled(NavLink)`
	background-color: ${props => props.color};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20%;
  cursor: pointer;
  text-decoration: none;
  width: 180px;
  height: 200px;
  padding: 20px;

	&:hover {
		box-shadow: 2px 2px 2px 1px #000;
	}
`

const ImageBack = styled.div`
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 140px;
`

const Image = styled.img`
  margin: 20px;
  width: 100px;
  height: 100px;
`

const Title = styled.h2`
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
`

const GameCard = (props) => {
	return (
		<Card to={props.to} color={props.color}>
			<ImageBack>
				<Image src={props.img} alt={props.name} />
			</ImageBack>
			<Title>{props.name}</Title>
		</Card>
	)
}

export default GameCard