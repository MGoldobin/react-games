import React from 'react'
import styled from 'styled-components'
import { QuestionData } from '../../utils/types/QuestionData'

interface QuestFormProps {
	data: QuestionData
}

const StyledQuestForm = styled.div`
	color: #fff;
`

const QuestForm = ({data}: QuestFormProps) => {
	return (
		<StyledQuestForm>
			{
				data.question
				/*
				<Question />
				<Answers />
				*/
			}
		</StyledQuestForm>
	)
}

export default QuestForm