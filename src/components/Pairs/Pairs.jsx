import React /*, { useState }*/ from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledPairs = styled.div`
	min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #000;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background-color: #64BF44;
`

const BackBtn = styled(NavLink)`
	background-image: url('../../assets/leftArrow.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 20px;
`

const Title = styled.h1`
	width: fit-content;
`

const Field = styled.div`

`

const Card = styled.div`

`

function shuffle(array) {
	array.concat(array).sort(() => Math.random() - 0.5)
}

const arr = [
	{ name: "JS", url: "./JS.png" },
	{ name: "Python", url: "./Python.png" },
	{ name: "C#", url: "./C#.jpg" },
	{ name: "C++", url: "./C++.jpg" },
	{ name: "React", url: "./React.png" },
	{ name: "PHP", url: "./PHP.png" },
	{ name: "CSS", url: "./CSS.jpg" },
	{ name: "HTML", url: "./HTML.png" }
]

const Pairs = () => {
	document.title = "Find a couple"
	//const [pairs, setPairs] = useState(shuffle(arr))


	return (
		<StyledPairs>
			<Header>
				<BackBtn to="/"></BackBtn>
				<Title>Find  a couple</Title>
			</Header>
			<Field>
				{
					shuffle(arr).map(pair =>
						(<Card>
							<h1>{pair.name}</h1>
						</Card>)
					)
				}
			</Field>
		</StyledPairs>
	)
}

export default Pairs