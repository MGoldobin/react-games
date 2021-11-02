import React from 'react'
import '../style/GameCard.css'
import { NavLink } from 'react-router-dom'

const GameCard = (props) => {

	return (
		<NavLink to={props.to} className={`card card_${props.color}`}>
			<div className="card__imageBack">
				<img className="card__image" src={props.img} alt={props.name} />
			</div>
			<h2 className="card__title">{props.name}</h2>
		</NavLink>
	)
}

export default GameCard
