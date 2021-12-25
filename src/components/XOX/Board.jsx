import React from 'react';
import styles from './Board.module.css'
import Field from './Field'

const Board = (props) => {
	return (
		<div className={styles.Board}>
			{
				props.fields.map((field, i) => (
					<Field key={i} value={field} onClick={() => props.click(i)} />
				))
			}
		</div>
	)
}

export default Board