import React from 'react'
import { useParams } from 'react-router-dom'

function NoteList({notes}) {

    const id=useParams().noteid

    const note= notes.find(n=> n.id === Number(id))

  return (
    <div>
        <h2>Note Content is</h2>
        <i>{note.content} </i>
    </div>
  )
}

export default NoteList