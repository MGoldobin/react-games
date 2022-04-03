import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledPopup = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`

const Body = styled.div`
  background-color: #fff;
  color: #000;
  width: 35%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  margin: 0 0 50px 0;
`

const Button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 90%;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #000;
  margin: 10px 0;
  outline: none;
  border-radius: 3px;

	&:hover {
  background-color: rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 425px) {
			width: 80%;
	}
`

const ButtonRestart = styled.button`
	${Button}
`

const ButtonLink = styled(NavLink)`
	${Button}
`

const Popup = ({ result, startNewGame }) => {
	return (
		<StyledPopup>
			<Body>
				<Title>{result}</Title>
				<ButtonRestart onClick={startNewGame}>Играть еще раз!</ButtonRestart>
				<ButtonLink to="/">На главную</ButtonLink> {/* свомал */}
			</Body>
		</StyledPopup>
	)
}

export default Popup