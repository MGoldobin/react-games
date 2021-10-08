import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/error.css'

const e404 = () => {
	return (
		<div className="error">
			<h1>Такая страница не существует</h1>
			<NavLink to="/">На главную</NavLink>
		</div>
	)
}

export default e404