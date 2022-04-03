import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
	width: 33px;
	height: 33px;
	border: 3px #EDF5E1 dotted;
	border-radius: 50%;
	animation: ${load} 4s infinite;
`

const load = keyframes`
	 0% {
		 transform: rotate(0deg)
	 }

	 25% {
		transform: rotate(90deg) scale(1.3)
	}

	 50% {
		 transform: rotate(180deg)
	 }

	 75% {
		transform: rotate(270deg) scale(1.3)
	}

	 100% {
		transform: rotate(360deg)
	}
`

const Loader = () => {
	return (
		<StyledLoader> </StyledLoader>
	)
}

export default Loader
