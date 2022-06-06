import React, { useEffect, useState } from 'react'
import store from '../../store/theme'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import Header from '../../components/Header'
import Select from '../../components/Select'
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY } from '../../utils/constants/constants'
import { useFetchQuestion } from '../../utils/hooks/useFetchQuestion'
import { Option } from '../../utils/types/Option'
import { useFetch } from '../../utils/hooks/useFetch'

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

  const [data, error, isLoading] = useFetchQuestion({category: category.value, difficulty: difficulty.value})
  console.log(data) //при смене стейта должен запрашиваться вопрос...

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
		</GamePage>
	)
})

export default Quiz