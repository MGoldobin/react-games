import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import store from '../store/theme'
import Button from './Button'
import NavButton from './NavButton'

const StyledPopup = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const Body = styled.div`
  background-color: #fff;
  color: #000;
  width: 35%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  margin: 0 0 50px 0;
`

type Props = {
  result: string,
  startNewGame: React.MouseEventHandler<HTMLButtonElement> /*НЕПОНЕЛ 2*/
}

const Popup = observer(({ result, startNewGame }: Props) => {
	return (
		<StyledPopup>
			<Body>
				<Title>{result}</Title>
				<Button onClick={startNewGame} title="Играть еще раз!" hoverBgColor={store.gameColor}/>
				<NavButton to="/" title="На главную" hoverBgColor={store.gameColor}/>
			</Body>
		</StyledPopup>
	)
})

export default Popup