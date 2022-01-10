import React from 'react'
import classes from './card.module.css'

const Card = (props) => {
    return (
        <div className={`card p-2 ${classes.card} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Card
