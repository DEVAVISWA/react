import React, { useRef, useState } from 'react'

function App(props) {


  const [notes, setNotes] = useState(props.notes)

  const[showStatus,setShowSatus] = useState('all')


  
  const [newNoteContent,setNewNoteContent] = useState('')
  const [newNoteImportant,setNewNoteImportant]= useState('true')

  const newNoteContentRef = useRef(null)

  

  const addNote = (event) => {
    event.preventDefault()
    // console.log('button is clicked')
    let noteObject = {
      id: notes.length + 1 ,
      content : newNoteContent,
      import : newNoteImportant === 'true'
    }
    setNotes(notes.concat(noteObject))
    setNewNoteContent('')
    setNewNoteImportant('')
    newNoteContentRef.current.focus()
  }
 
  
  const handleStatusChange = (event) => {
    setShowSatus(event.target.value)
  }



  const filteredNotes = (notes,showStatus) => {       
    switch(showStatus) {
      case 'all' :
        return notes ;
      case 'imp' :
        return notes.filter(note => note.important === true)
      case 'nonimp' :
        return notes.filter(note => note.important === false)
    }
  }
  const notesFiltered = filteredNotes(notes,showStatus)

  
  return (
    <div>
      <h1>The Notes are</h1>

      <label>
        <input type='radio' name='filter' value='all'
        onChange={handleStatusChange} checked={showStatus ==='all'}/> All Notes
      </label>
      <label>
        <input type='radio' name='filter' value='imp'
        onChange={handleStatusChange} />Important notes
      </label>
      <label>
        <input type='radio' name='filter' value='nonimp'
        onChange={handleStatusChange} />Non Important notes
      </label>
      
      <ul>
        {
          notesFiltered.map(note =>
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
            <option disabled>Selectoption</option>
            <option value='true'>true</option>
            <option value='false'>false</option>
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