import React from 'react'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  return (
    <Box>
      <h1>Такая страница не существует</h1>
      <NavLink to="/">На главную</NavLink>
    </Box>
  )
}

export default ErrorPage
