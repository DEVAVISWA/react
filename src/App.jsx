import React, { useRef, useState } from 'react'

function App(props) {

  const newNoteContentRef = useRef(null)
  const [newNoteContent,setNewNoteContent] = useState('')

  const [notes, setNotes] = useState(props.notes)
  return (
    <div>
      <h1>The Notes are</h1>
      <ul>
        {
          notes.map(note =>
            <li key={note.id}>{note.content}</li>
          )
        }
      </ul>
      <hr />
      <form >
        <label>
          content : &nbsp;&nbsp;&nbsp;&nbsp;
          <input 
          type="text" ref={newNoteContentRef} value={newNoteContent} 
          onChange={e => setNewNoteContent(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default App