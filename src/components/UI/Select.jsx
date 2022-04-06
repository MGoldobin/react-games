import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  border: 2px solid #F85623;
  background-color: #fff;
  border-radius: 20px;
  margin: 10px 0;
  height: 50px;
  width: 200px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  text-align: center;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 320px) {
		padding: 0;
	}
`

const Select = ({ options, defaultValue, value, onChange }) => {
	return (
		<StyledSelect
			value={value}
			onChange={e => onChange(e.target.value)}
		>
			<option value="" disabled>{defaultValue}</option>
			{options.map(option =>
				<option value={option.value} key={option.value}>{option.name}</option>
			)}
		</StyledSelect>
	)
}

export default Select
