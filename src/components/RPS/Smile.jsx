import React from 'react'
import styles from './Smile.module.css'

const Smile = (props) => {

	return (
		<div
			className={styles.Smile}
			style={props.disabled ? { pointerEvents: props.disabled } : {}}
			onClick={() => { props.handleClick(props.name, props.url) }}
		>
			<img className={styles.Img} src={props.url} alt={props.name} />
			<p className={styles.Title}>{props.name}</p>
		</div>
	)
}

export default Smile
