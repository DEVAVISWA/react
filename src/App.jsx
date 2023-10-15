import React from 'react'
import Note from './components/note'

function App({notes}) { //destructuring of obj from main.jsx
  console.log(notes)
  return (
    <div>
      <ul>
        {
          notes.map(note=>
            <Note key={note.id} note={ note }/> )
        }       
      </ul>
    </div>    
  )
}

export default App