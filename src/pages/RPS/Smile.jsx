import React from 'react'
import styled from 'styled-components'

const StyledSmile = styled.div`
	border: 1px #0672DE solid;
	border-radius: 5px;
	padding: 5px;
	margin-right: 5px;
	width: 30%;
	cursor: pointer;

	&:hover {
		border: 4px #0672DE solid;
	}
`

const Image = styled.img`
	width: 100%;
`

const Title = styled.p`
	text-align: center;
`

const Smile = (props) => {
	return (
		<StyledSmile
			style={props.disabled ? { pointerEvents: props.disabled } : {}}
			onClick={() => { props.handleClick(props.name, props.url) }}
		>
			<Image src={props.url} alt={props.name}/>
			<Title>{props.name}</Title>
		</StyledSmile>
	)
}

export default Smile
