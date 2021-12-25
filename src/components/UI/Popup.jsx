import React from 'react'
import styles from './Popup.module.css'
import { NavLink } from 'react-router-dom'

const Popup = ({ result, startNewGame }) => {
	return (
		<div className={styles.Popup}>
			<div className={styles.Body}>
				<h2 className={styles.Title}>{result}</h2>
				<button className={styles.Tutton} onClick={startNewGame}>Играть еще раз!</button>
				<NavLink className={styles.Button} to="/">На главную</NavLink>
			</div>
		</div>
	)
}

export default Popup