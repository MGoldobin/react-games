import React from 'react'
import '../../style/RPS/Smile.css'

const Smile = (props) => {

	return (
		<div style={props.disabled ? { pointerEvents: props.disabled } : {}} className="smile" onClick={() => { props.handleClick(props.name, props.url) }}>
			<img className="smile__img" src={props.url} alt={props.name} />
			<p className="smile__title">{props.name}</p>
		</div>
	)
}

export default Smile
