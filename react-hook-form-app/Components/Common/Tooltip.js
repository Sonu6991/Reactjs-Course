import { Tooltip, Zoom } from '@mui/material'
import React from 'react'

const TooltipComp = (props) => {
      return (
            <Tooltip title={props.title} placement="bottom-end" TransitionComponent={Zoom} arrow>
                  {props.children}
            </Tooltip>
      )
}

export default TooltipComp
