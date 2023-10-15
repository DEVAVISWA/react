import React from 'react'

function App({note}) { //destructuring of obj from main.jsx
  console.log(note)
  return (
    <div>
      <ul>
        {
          note.map(notes=>
            <li key={notes.id}> {notes.content} </li> )
        }       
      </ul>
    </div>    
  )
}

export default App