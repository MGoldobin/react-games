import React from 'react';
import styled from 'styled-components'
import Field from './Field'

const StyledBoard = styled.div`
  width: 300px;
  height: 300px;
  background-color: azure;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const Board = (props) => {
	return (
		<StyledBoard>
			{
				props.fields.map((field, i) => (
					<Field key={i} value={field} onClick={() => props.click(i)} />
				))
			}
		</StyledBoard>
	)
}

export default Board