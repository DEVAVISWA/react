import React from 'react'

function Button({onClicking, name} ){
    return (
        <button onClick={onClicking}> {name} </button>
    )
}

export default Button