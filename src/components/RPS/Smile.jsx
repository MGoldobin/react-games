import React from 'react'
import '../../style/RPS/Smile.css'
//import Loader from '../UI/Loader'

const Smile = ({ name, url }) => {
	//const [loading, setLoading] = useState(true)
	//componentDidMount(() => setLoading(false))

	return (
		<div className="smile">
			<img className="smile__img" src={url} alt={name} />
			<p className="smile__title">{name}</p>
		</div>
	);
}

export default Smile
