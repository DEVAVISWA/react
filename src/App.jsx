import React from 'react'
import Note from './components/note'

function App({notes}) { 
 function saveButon(){
  console.log('save button clicked')
 }
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
        <button onClick={saveButon} >Save Note</button>
      </form>
    </div>    
  )
}

export default App