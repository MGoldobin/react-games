import React from 'react'
import { Button as MuiButton} from '@mui/material'
import { styled as styles } from '@mui/material/styles'

const Button = (props) => {

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
		<StyledButton variant="contained" onClick={props.onClick}>
			{props.title}
		</StyledButton>
	)
}

export default Button