import React, { useRef, useState } from 'react'

function App(props) {

  const newNoteContentRef = useRef(null)
  const [newNoteContent,setNewNoteContent] = useState('')
  const[newNoteImportant,setNewNoteImportant]= useState('')

  const [notes, setNotes] = useState(props.notes)

  

  const addNote = (event) => {
    event.preventDefault()
    // console.log('button is clicked')
    let noteObject = {
      id: notes.length + 1 ,
      content : newNoteContent,
      import : newNoteImportant === 'true'
    }
    setNotes(notes.concat(noteObject))
  }

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
      <form onSubmit={addNote}>
        <label>
          Content : &nbsp;&nbsp;&nbsp;&nbsp;
          <input 
          type="text" ref={newNoteContentRef} value={newNoteContent} 
          onChange={e => setNewNoteContent(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Important : &nbsp;
          <select 
          onChange={e=> setNewNoteImportant(e.target.value)}
           value={newNoteImportant} >
            <option disabled>Select option</option>
            <option value="">true</option>
            <option value="">false</option>
          </select>
        </label>
        <br />
        <br />  
        <button type='submit'>Add the note</button>
      </form>
    </div>
  )
}

export default App