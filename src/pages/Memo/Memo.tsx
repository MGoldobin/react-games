import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Card from './Card'
import store from '../../store/theme'
import { MEMO_LIST } from '../../utils/constants/constants'
import { MemoCard } from '../../utils/types/MemoCard'
import { shuffleArray } from '../../utils/functions/shuffleArray'

const StyledMemo = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color.primary};
  position: relative;
`

const Content = styled.div`
	margin: 20px 0 0;
	display: flex;
	gap: 50px;
	justify-content: space-between;
	align-items: center;
`
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Arial;
`

const Field = styled.div`
	display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

const Memo = observer(() => {
	document.title = "Memo"
	const [pairs, setPairs] = useState(shuffleArray(MEMO_LIST))

	const startNewGame = () => {
		setPairs(shuffleArray(MEMO_LIST))
	}

	const handleClick = () => {

	}

	return (
		<StyledMemo>
			<Header to='/' title='Memo'/>
			<Content>
				<Field>
					{
						pairs.map((pair, i) => <Card key={i} item={pair} handleClick={handleClick}/>)
					}
				</Field>

				<Info>
					<Button onClick={startNewGame} title="Начать заново" hoverBgColor="#64BF44" hoverColor="#fff"/>
				</Info>
			</Content>
		</StyledMemo>
	)
})

export default Memo