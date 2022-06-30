import React from 'react'
import styled from 'styled-components'
import Switch from '@mui/material/Switch'
import { observer } from 'mobx-react-lite'
import store from '../store/theme'

const StyledSwitchButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const SwitchButton = observer(() => {
	return (
		<StyledSwitchButton>
			<img src={store.theme.icons.switchButton} alt="Night mode" />
			<Switch 
				checked={store.isDarkTheme}
				onChange={store.changeTheme} 
			/>
		</StyledSwitchButton>
	)
})

export default SwitchButton