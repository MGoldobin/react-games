import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledError = styled.div`
  background-color: #cac3b5;
  color: #464441;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 36px;
  width: 100vw;
  height: 100vh;
  text-decoration: none;
  flex-direction: column;
`


const Error = () => {
	return (
		<StyledError>
			<h1>Такая страница не существует</h1>
			<NavLink to="/">На главную</NavLink>
		</StyledError>
	)
}

export default Error