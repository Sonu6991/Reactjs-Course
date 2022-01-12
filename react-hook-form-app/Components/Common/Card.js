import React from 'react'
import { Card } from '@mui/material'
// import { ClassNames } from '@emotion/react'
import classes from './Card.module.scss'
const CardComp = (props) => {
      return (
            <Card className={`${classes.card} ${props.className}`}>
                  {props.children}
            </Card>
      )
}

export default CardComp
