import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Error.module.css'

const Error = () => {
	return (
		<div className={styles.Error}>
			<h1>Такая страница не существует</h1>
			<NavLink to="/">На главную</NavLink>
		</div>
	)
}

export default Error