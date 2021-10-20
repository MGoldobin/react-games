import React from 'react'
import '../../style/XOX/Popup.css'
import { NavLink } from 'react-router-dom'

const Popup = ({ winner, startNewGame }) => {
	return (
		<div className="popup popup_active">
			<div className="popup__body">
				<h2 className="popup__title">Победил {winner}</h2>
				<button className="popup__button" onClick={startNewGame}>Играть еще раз!</button>
				<NavLink className="popup__button" to="/">На главную</NavLink>
			</div>
		</div>
	)
}

export default Popup