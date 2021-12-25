import React from 'react'
import styles from './Field.module.css'

const Field = (props) => {
	return (
		<button className={styles.field} onClick={props.onClick}>{props.value}</button>
	)
}

export default Field