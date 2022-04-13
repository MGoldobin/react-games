import React from 'react'
import { Button as MuiButton} from '@mui/material'
import { styled as styles } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'

const NavButton = (props) => {

	//styles!!!
	const StyledButton = styles(MuiButton)({
		backgroundColor: '#fff',
		margin: '10px 0',
		color: '#000',
		zIndex: 1,
		fontWeight: 'bold',

		'&:hover': {
			backgroundColor: props.hoverBgColor,
			color: props.hoverColor
		}
	})

	return (
		<StyledButton variant="contained" component={NavLink} to={props.to}>
			{props.title}
		</StyledButton>
	)
}

export default NavButton