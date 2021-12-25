import React from 'react'
import styles from './GameCard.module.css'
import { NavLink } from 'react-router-dom'

const GameCard = (props) => {

	return (
		<NavLink to={props.to} className={styles.Card + props.color}>
			<div className={styles.ImageBack}>
				<img className={styles.Image} src={props.img} alt={props.name} />
			</div>
			<h2 className={styles.Title}>{props.name}</h2>
		</NavLink>
	)
}

export default GameCard
