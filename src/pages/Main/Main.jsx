import React from 'react'
import GameCard from './GameCard'
import Footer from './Footer'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { GAMES_LIST } from '../../utils/constants/constants'


const StyledMain = styled.div`
  margin: 40px 0;
  min-height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.borderColor};
  box-shadow: 6px 6px 4px ${props => props.theme.borderColor};
  border-radius: 20px;
  padding: 50px;
`

const Menu = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 1080px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin: 20px 0;
	}

	@media screen and (max-width: 830px) {
		grid-template-columns: repeat(2, 1fr);
		justify-items: center
	}

	@media screen and (max-width: 530px) {
		display: flex;
		flex-direction: column;
		align-items: center
	}
`

const Title = styled.h1`
	width: fit-content;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  text-decoration: none;
  color: ${props => props.theme.color.primary};
`

const Main = observer(() => {
	document.title = "Menu"

	return (
		<StyledMain>
			<Title>REACT games</Title>
			<Menu>
				{
					GAMES_LIST.map((game) => (<GameCard name={game.name} img={game.img} key={game.name} to={game.to} color={game.color} />))
				}
			</Menu>
			<Footer />
		</StyledMain>
	)
})

export default Main
