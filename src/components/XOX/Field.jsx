import React from 'react'
import styled from 'styled-components'

const StyledField = styled.button`
  color: #000;
  cursor: pointer;
  outline: none !important;
  font-size: 60px;
  border: 1px solid #333;
  width: 100px;
  height: 100px;
  display: block;

	&:hover {
		background-color: #F85623;
		color: #fff;
		transition: 0.5s all ease;
	}
`

const Field = (props) => {
	return (
		<StyledField onClick={props.onClick}>{props.value}</StyledField>
	)
}

export default Field