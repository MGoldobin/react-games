import React, { MouseEventHandler } from 'react';
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

type Props = {
	fields: string[],
	click: (index: number) => MouseEventHandler<HTMLButtonElement> | undefined
}

const Board = ({fields, click}: Props) => {
	return (
		<StyledBoard>
			{
				fields.map((field: string, i: number) => (
					<Field key={i} value={field} index={i} onclick={click} />
				))
			}
		</StyledBoard>
	)
}

export default Board