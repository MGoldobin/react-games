import React from 'react'
import '../style/GameCard.css'
import { NavLink } from 'react-router-dom'
//import Loader from './UI/Loader'

const GameCard = (props) => {
	//const [loading, setLoading] = useState(true)
	//useEffect(() => setLoading(false))

	return (
		<NavLink to={props.to} className="card">
			<div className="card__imageBack">
				<img className="card__image" src={props.img} alt={props.name} />
			</div>
			<h2 className="card__title">{props.name}</h2>
		</NavLink>
	)
}

export default GameCard
