import React/*, { useState } */from 'react'
import { NavLink } from 'react-router-dom'
//import Popup from '../UI/Popup.jsx'
import styles from '../XOX/Game.module.css'

const Tetris = () => {
	return (
		<div className={styles.GamePage}>
			<div className={styles.Header}>
				<NavLink className={styles.BackBtn} to="/"></NavLink>
				<h1 className={styles.Title}>Tetris</h1>
			</div>
			

			<button className={styles.Button} >Начать заново</button>
		</div>
	)
}

export default Tetris