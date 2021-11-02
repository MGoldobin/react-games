import React from 'react'

const Select = ({ options, defaultValue, value, onChange }) => {
	return (
		<select
			className="game-page__btn"
			value={value}
			onChange={e => onChange(e.target.value)}
		>
			<option value="" disabled>{defaultValue}</option>
			{options.map(option =>
				<option value={option.value} key={option.value}>{option.name}</option>
			)}
		</select>
	)
}

export default Select
