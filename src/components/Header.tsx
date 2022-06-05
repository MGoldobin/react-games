import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SwitchButton from './SwitchButton'
import store from '../../store/theme'
import { observer } from 'mobx-react-lite'

const StyledHeader = styled.div<{bgColor: string}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => props.bgColor};
`
const BackBtn = styled(NavLink)<{image: string}>`
	background-image: url('/leftArrow${props => props.image}.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
`

const Title = styled.h1<{color: string}>`
	width: fit-content;
	color: ${props => props.color};
`

type Props = {
  to: string,
  title: string
}

const Header = observer(({to, title}:Props) => {
	return (
		<StyledHeader bgColor={store.isDarkTheme ? '#252525' : '#fff'}>
				<BackBtn to={to} image={store.isDarkTheme ? 'Ligth' : 'Dark'}></BackBtn>
				<Title color={store.isDarkTheme ? '#fff' : '#000'}>{title}</Title>
        <SwitchButton />
		</StyledHeader>
	)
})

export default Header