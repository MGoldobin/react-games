import React, { useEffect, useState } from 'react'
import store from '../../store/theme'
import axios from 'axios'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import Header from '../../components/Header'
import Select from '../../components/Select'
import QuestForm from './QuestForm'
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY } from '../../utils/constants/constants'
import { getQuestUrl } from '../../utils/functions/getQuestUrl'
import { Option } from '../../utils/types/Option'
import { QuestionData } from '../../utils/types/QuestionData'

const GamePage = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color};
  position: relative;
`

const Filter = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 20px;
`

const Quiz = observer(() => {
  const [category, setCategory] = useState<Option>({value: "", name: ""})
  const [difficulty, setDifficulty] = useState<Option>({value: "", name: ""})
  const [quest, setQuest] = useState<QuestionData>({ 
    category: "",
    correct_answer: "",
    incorrect_answers: [],
    question: ""
  })
  const [url, setUrl] = useState<string>(getQuestUrl({category: category.value, difficulty: difficulty.value}))

  const getQuest = async () => {
    const data = await axios.get(url)
    setQuest(data.data.results[0])
    console.log(data.data.results[0])
  }

  useEffect(() => {
    getQuest()
  }, [])

	return (
		<GamePage theme={store.theme}>
      <Header to='/' title='Quiz'/>
      <Filter>
			  <Select 
          title="Category" 
          options={QUIZ_CATEGORY} 
          option={category}
          setOption={setCategory}
        />
        <Select 
          title="Difficulty" 
          options={QUIZ_DIFFICULTY} 
          option={difficulty}
          setOption={setDifficulty}
        />
      </Filter>
      <QuestForm 
        data={quest}
      />
		</GamePage>
	)
})

export default Quiz