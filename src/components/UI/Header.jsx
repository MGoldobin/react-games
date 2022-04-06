import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SwitchButton from './SwitchButton'
import store from '../../store/theme'
import { observer } from 'mobx-react-lite'

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => props.color};
`
const BackBtn = styled(NavLink)`
	background-image: url('/leftArrow.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
`

const Title = styled.h1`
	width: fit-content;
	color: #fff;
`

const Header = observer((props) => {
	return (
		<StyledHeader color={store.gameColor}>
				<BackBtn to={props.to}></BackBtn>
				<Title>{props.title}</Title>
        <SwitchButton />
		</StyledHeader>
	)
})

export default Header