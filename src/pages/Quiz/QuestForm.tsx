import React, { Dispatch, useState, SetStateAction, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { QuestionData } from '../../utils/types/QuestionData'
import { shuffleArray } from '../../utils/functions/shuffleArray'
import store from '../../store/theme'

interface QuestFormProps {
	data: QuestionData,
	setPlaying: Dispatch<SetStateAction<boolean>>
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

const QuestForm = observer(({data, setPlaying}: QuestFormProps) => {
	const [findRightAnswer, setFindRightAnswer] = useState(false)
	const [clickAnswer, setClickAnswer] = useState(false)

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
				? findRightAnswer ? "Вы ответили правильно!!!" : `Правильный ответ: ${data.correct_answer}`
				: null
			}
			{
				clickAnswer 
				? <button onClick={() => setPlaying(false)}>Следующий вопрос</button>
				: null
			}
			
		</StyledQuestForm>
	)
})

export default QuestForm