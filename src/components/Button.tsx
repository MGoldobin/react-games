import React, { MouseEventHandler } from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled as styles } from '@mui/material/styles'

type Props = {
  hoverBgColor?: string
  hoverColor?: string
  title: string
  onClick: MouseEventHandler<HTMLButtonElement> //НЕПОНЕЛ
}

const Button = ({ hoverBgColor, hoverColor, title, onClick }: Props) => {
  //styles!!!
  const StyledButton = styles(MuiButton)({
    backgroundColor: '#fff',
    margin: '10px 0',
    minWidth: '200px',
    color: '#000',
    zIndex: 1,
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: hoverBgColor ? hoverBgColor : '#fff',
      color: hoverColor
    }
  })

  return (
    <StyledButton variant="contained" onClick={onClick}>
      {title}
    </StyledButton>
  )
}

export default Button
