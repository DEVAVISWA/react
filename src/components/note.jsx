import React from 'react'

function Note({ note }) {
  return (
    <li > {note.content} {note.important==true && '⭐'} </li>
  )
}

export default Note