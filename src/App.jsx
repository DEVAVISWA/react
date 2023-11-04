import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNote, toogleImportanceOfID } from './reducers/noteReducer'



function App() {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()


  const addNote = (event) => {
    event.preventDefault()
    const typedNote= event.target.note.value
    console.log(typedNote)
    event.target.note.value= ''
    dispatch(createNote(typedNote,notes.length))
  }

  const toogleImportance = (id) => {
    dispatch(toogleImportanceOfID(id))
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" placeholder='type a note' name='note'/>        
        <button type='sumit'>submit</button>
      </form>
      <div >
        {
          notes.map(note =>
            <li onClick={() => toogleImportance(note.id)} 
            key={note.id}>{note.typedNote} 
            {note.importance ? '★' : '☆'} </li>)
        }
      </div>
    </div>
  )
}

export default App