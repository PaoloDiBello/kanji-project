import React from 'react'
import { Paper, Typography, Link } from '@material-ui/core'

export default ({  }) => {
  
  return (<Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Paolo Di Bello
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
  </Typography>
  )
}