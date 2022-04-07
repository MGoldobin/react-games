import React from 'react'
import styled from 'styled-components'
import SwitchButton from '../UI/SwitchButton'
import store from '../../store/theme'
import { observer } from 'mobx-react-lite'

const StyledFooter = styled.footer`
	width: 100%;
	display: flex;
	height: 32px;
	justify-content: space-between;
`

const Link = styled.a`
	cursor: pointer;
	height: 32px;
`

const Footer = observer(() => {
	return (
		<StyledFooter>
			<SwitchButton />
			<Link href="https://github.com/MGoldobin/react-games" target="blank">
				<img src={store.isDarkTheme ? "./GitHubLight.png" : "./GitHubDark.png"} alt="GitHub" />
			</Link>
		</StyledFooter>
	)
})

export default Footer