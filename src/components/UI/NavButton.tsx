import { Button as MuiButton} from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {
	to: string,
	title: string,
	hoverBgColor?: string,
	hoverColor?: string
}

const NavButton = ({ to, title, hoverBgColor, hoverColor }:Props) => {

	//styles!!!
	const StyledButton = {
		backgroundColor: hoverBgColor ? hoverBgColor :'#fff',
		minWidth: '200px',
		margin: '10px 0',
		color: '#000',
		zIndex: 1,
		fontWeight: 'bold',

		'&:hover': {
			backgroundColor: hoverBgColor,
			color: hoverColor
		}
	}

	return (
		<MuiButton variant="contained" component={NavLink} to={to} style={StyledButton}>
			{title}
		</MuiButton>
	)
}

export default NavButton