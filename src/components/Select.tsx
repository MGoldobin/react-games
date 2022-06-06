import React, { useRef, useState } from "react"
import styled from "styled-components"
import store from '../store/theme'
import { observer } from 'mobx-react-lite'
import { useOnClickOutside } from "../utils/hooks/useOnClickOutside"
import { Option } from '../utils/types/Option'

const CustomSelect = styled.div`
  width: 10.5em;
	cursor: pointer;
`

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #000;
  background: #ffffff;
  border-radius: 2px;
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #000;
  box-sizing: border-box;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
	max-height: 200px;
	overflow-y: scroll;
	
  &:first-child {
    margin-top: 0.8em;
  }

	&:last-child {
    margin-bottom: 0;
  }
`

const ListItem = styled.li`
  list-style: none;
  margin: 0 0 .8em .8em;
`

interface SelectProps {
  option: Option
  setOption: (option: Option) => void
  title: string
	options: Option[]
}

const Select = observer(({option, setOption, title, options}:SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
	const SelectRef = useRef<HTMLDivElement>(null)

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked =  (option: Option) => {
    setOption({value: option.value, name: option.name})
    setIsOpen(false)
  };

	useOnClickOutside(SelectRef, () => setIsOpen(false), []);

  return (
    <CustomSelect ref={SelectRef}>
      <DropDownHeader onClick={toggling} theme={store.theme}>
        {option.name || title}
      </DropDownHeader>
			
      {isOpen && (
        <DropDownList>
          {options.map(option => (
            <ListItem onClick={() => onOptionClicked(option)} key={option.value}>
              {option.name}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </CustomSelect>
  )
})

export default Select