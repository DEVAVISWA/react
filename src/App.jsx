import React from 'react'
import Note from './components/note'

function App({notes}) { 
 
  return (
    <div>
      <ul>
        {
          notes.map(note=>
            <Note key={note.id} note={ note }/> )
        }       
      </ul>
      <form >
        <input type="text" />
        <button onClick={()=>{
          console.log('save button clicked')
        }} >Save Note</button>
      </form>
    </div>    
  )
}

export default App