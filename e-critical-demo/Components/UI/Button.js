import React from 'react'

function Button(props) {
    return (
        <button className='tableButton px-3 py-2'>
            {props.children}
        </button>
    )
}

export default Button
