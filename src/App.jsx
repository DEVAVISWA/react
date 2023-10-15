import React from 'react'
import Note from './components/note'

function App({notes}) { 
 const addNote = (event) =>{
    event.preventDefault()
    console.log(event.target)
 }
  return (
    <div>
      <ul>
        {
          notes.map(note=>
            <Note key={note.id} note={ note }/> )
        }       
      </ul>
      <form onSubmit={addNote}>
        <input type="text" />
        <button type='submit' >Save Note</button>
      </form>
    </div>    
  )
}

export default App