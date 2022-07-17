import React, { Dispatch, useState, SetStateAction, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { QuestionData } from '../../utils/types/QuestionData'
import { shuffleArray } from '../../utils/functions/shuffleArray'
import store from '../../store/theme'

interface QuestFormProps {
	data: QuestionData,
	getQuestion: () => Promise<void>
}

const StyledQuestForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 80%;
	font-size: 18px;
`

const Question = styled.h1`
	text-decoration: underline;
	-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const AnswersGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`

const Answer = styled.button`
	border: 1px solid ${props => props.theme.borderColor};
	height: 30px;
	line-height: 30px;
	font-size: 20px;

	&:hover {
		border: 2px solid ${props => props.theme.borderColor};
		cursor: pointer;
		font-weight: 700;
	}

	&:disabled {
		background-color: #F0F0F0;
		color: #000;
		cursor: default;
	}
`

const Button = styled.button`
  padding: 5px 24px;
	margin: 0 auto;
  border-radius: 4px;
	max-width: 200px;
  transition-duration: 0.4s;
  border: 2px solid #000;
  background-color: #fff;
	font-size: 18px;

  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`


const QuestForm = observer(({data, getQuestion}: QuestFormProps) => {
	const [findRightAnswer, setFindRightAnswer] = useState(false)
	const [clickAnswer, setClickAnswer] = useState(false)

	const startNewGame = () => {
		getQuestion()
		setClickAnswer(false)
		setFindRightAnswer(false)
	}

	const answersArr = useMemo(() => {
		return shuffleArray([...data.incorrect_answers, data.correct_answer])
	}, [data])

	const checkAnswer = (answer: string) => {
		return answer === data.correct_answer
	}

	const handleAnswer = (answer: string) => {
		setClickAnswer(true)
		if (checkAnswer(answer)) setFindRightAnswer(true)
	}

	const border = (answer: string) => {
		if (clickAnswer && checkAnswer(answer)) return '3px solid green'
		if (clickAnswer && !checkAnswer(answer)) return '3px solid red'
		return `1px solid ${store.theme.borderColor}`
	}

	return (
		<StyledQuestForm>
			<Question>{data.question}</Question>
			<AnswersGrid >
				{
					answersArr.map(answer => 
						<Answer 
							disabled={clickAnswer}
							key={answer}
							style={{
								border: border(answer)
							}}
							onClick={() => handleAnswer(answer)}
						>
							{answer}
						</Answer>
					)
				}
			</AnswersGrid>
			{
				clickAnswer
				? findRightAnswer ? "Correct answer! Well done!" : `Correct answer: ${data.correct_answer}`
				: null
			}
			{
				clickAnswer 
				? <Button onClick={() => startNewGame()}>Next question</Button>
				: null
			}
			
		</StyledQuestForm>
	)
})

export default QuestForm