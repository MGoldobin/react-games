import React from 'react'
import GameCard from './GameCard'
import Footer from './Footer'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import store from '../../store/theme'

const games = [
	{ name: "Tic-Tac-Toe", img: "./tictactoe.svg", to: "/xox", color: "#F85623" },
	//{ name: "2048", img: "./2048.svg", to: "/" },
	//{ name: "Minesweeper", img: "./soon.jpg", to: "/" },
	//{name:"Developing...", img:"./soon.jpg", to: "/"},
	{name:"Tetris", img:"./tetris.svg", to: "/tetris", color: "#F00"},
	{ name: "Find a couple", img: "./pairs.svg", to: "/pairs", color: "#64BF44" },
	{ name: "Rock, paper, scissors!", img: "./RPS.svg", to: "/rps", color: "#0672DE" }
]

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
	background-color: ${props => props.theme.backgroundColor}
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
  color: ${props => props.theme.color};
`

const Main = observer(() => {
	document.title = "Menu"

	return (
		<StyledMain theme={store.theme}>
			<Title theme={store.theme}>REACT games</Title>
			<Menu>
				{
					games.map((game) => (<GameCard name={game.name} img={game.img} key={game.name} to={game.to} color={game.color} />))
				}
			</Menu>
			<Footer />
		</StyledMain>
	)
})

export default Main
