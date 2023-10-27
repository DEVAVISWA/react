import React, { useState } from 'react'

function App(props) {

  const [notes,setNotes] = useState(props.notes)
  return (
    <div>
      <h1>Notes are</h1>
      <ul>
        {
          notes.map(note =>
            <li key={note.id}>{note.content}</li> 
            )
        }
      </ul>
    </div>
  )
}

export default App