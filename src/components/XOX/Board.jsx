import React from 'react';
import '../../style/XOX/Board.css'
import Field from './Field'

const Board = (props) => {
	return (
		<div className="board">
			{
				props.fields.map((field, i) => (
					<Field key={i} value={field} onClick={() => props.click(i)} />
				))
			}
		</div>
	)
}

export default Board