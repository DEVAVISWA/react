import React from 'react'

function Note({ note }) {
  return (
    <li > {note.important==true ? note.content + "⭐" : note.content}  </li>
  )
}

export default Note