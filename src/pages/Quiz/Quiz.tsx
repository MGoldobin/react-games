import React, { useState, Dispatch, useEffect } from 'react'
import Select, { SingleValue } from 'react-select'
import axios from 'axios'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import store from '../../store/theme'
import Header from '../../components/Header'
import QuestForm from './QuestForm'

import { getQuestUrl } from '../../utils/functions/getQuestUrl'
import { Option } from '../../utils/types/Option'
import { QuestionData } from '../../utils/types/QuestionData'
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY } from '../../utils/constants/constants'
import { decodeB64 } from '../../utils/functions/decodeB64'


const GamePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  color: ${props => props.theme.color.primary};
`

const Body = styled.div`
  font-family: 'Baloo 2', cursive;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-grow: 6;
  width: 80%;
  background-color: ${props => props.theme.backgroundColor};
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.borderColor};
`

const Filter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #000;

  @media (max-width: 574px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  padding: 10px 24px;
  border-radius: 4px;
  transition-duration: 0.4s;
  border: 2px solid #98128B;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
  }
`

const Quiz = observer(() => {
  const [category, setCategory] = useState<Option>({value: null, label: ""})
  const [difficulty, setDifficulty] = useState<Option>({value: null, label: ""})
  const [playing, setPlaying] = useState(false)
  const [url, setUrl] = useState<string>(getQuestUrl({category: null, difficulty: null}))
  const [quest, setQuest] = useState<QuestionData>({ 
    category: "",
    correct_answer: "",
    incorrect_answers: [],
    question: "",
    difficulty: ""
  })

  useEffect(() => {
    setUrl(getQuestUrl({category: category.value, difficulty: difficulty.value}))
    console.log(url)
  }, [category, difficulty])

  const handleChangeFilter = (selectedOption: SingleValue<Option> | unknown, setSate: Dispatch<Option>) => {
    setPlaying(false)
    selectedOption 
      ? setSate({value: (selectedOption as Option).value, label: (selectedOption as Option).label}) 
      : setSate({value: null, label: ""})
  }

  const handleGetQuestion = async () => {
    setPlaying(true)
    const data = await axios.get(url)
    setQuest({ 
        category: decodeB64(data.data.results[0].category),
        correct_answer: decodeB64(data.data.results[0].correct_answer),
        incorrect_answers: data.data.results[0].incorrect_answers.map((ans:string) => decodeB64(ans)),
        question: decodeB64(data.data.results[0].question),
        difficulty: decodeB64(data.data.results[0].difficulty)
      })
  }

	return (
		<GamePage theme={store.theme}>
      <Header to='/' title='Quiz'/>
      <Filter>
        <Select 
          options={QUIZ_CATEGORY}
          onChange={(newValue) => handleChangeFilter(newValue, setCategory)}
          placeholder={'Any category'}
          styles={{
            control: base => ({
              ...base,
              width: "220px"
            })
          }}
          isClearable
        />
        <Select 
          options={QUIZ_DIFFICULTY}
          onChange={(newValue) => handleChangeFilter(newValue, setDifficulty)}
          placeholder={'Any difficulty'}
          styles={{
            control: base => ({
              ...base,
              width: "220px"
            })
          }}
          isClearable
        />
      </Filter>
      <Body>
        {
          playing
          ? <QuestForm data={quest} setPlaying={setPlaying}/>
          : <Button onClick={handleGetQuestion}>Get question</Button>
        }
      </Body>
		</GamePage>
	)
})

export default Quiz