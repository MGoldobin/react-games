import React from 'react'
import Popup from '../../components/Popup'
import whoWinner from '../../utils/functions/winnerRPS'

const Winner = ({ pName, cName, startNewGame }) => {
	return (
		whoWinner(pName, cName) ?
			<Popup result={whoWinner(pName, cName)} startNewGame={startNewGame} /> :
			null
	)
}

export default Winner
