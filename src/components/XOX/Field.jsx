import React from 'react'
import '../../style/XOX/Field.css'

const Field = (props) => {
	return (
		<button className="field" onClick={props.onClick}>{props.value}</button>
	)
} 

export default Field