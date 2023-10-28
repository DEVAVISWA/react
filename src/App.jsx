import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReadNotes from './components/ReadNotes';
import CreateNewNote from './components/CreateNewNote';

 
function App() {

  // define a state to store the notes from props
  const [notes, setNotes] = useState([]);
  // console.log(notes)

  const [showStatus, setShowStatus] = useState('all');

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('true');

  // define a contentRef to access and manipulate the content element
  const newNoteContentRef = useRef(null);


  useEffect(()=> {
    newNoteContentRef.current.focus()
  },[])

  useEffect(()=> {
    fetchNotes();
  },[])

  const fetchNotes = async() =>{
    try{
      const response = await axios.get('http://localhost:3001/notes/')
      // console.log(response)
      // console.log(response.data)
      setNotes(response.data)
    } catch (error){
      console.log('error fetching data', error)
    }
  }

  const addNote = (event) => {
    event.preventDefault();

    // create a new note object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant == 'true',
    }

    // setNotes(notes.concat(noteObject));
    console.log('adding new note...')
    axios 
    .post('http://localhost:3001/notes/',noteObject)
    .then(response=> {
      console.log('note added successfully...')
    })

    fetchNotes()

    // clear the inputs
    setNewNoteContent('');
    setNewNoteImportant('');


    newNoteContentRef.current.focus();
  }

  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  

  return (
    <div>
      <ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={notes}/>
      <hr></hr>
      <CreateNewNote addNote={addNote} newNoteContent={newNoteContent} 
      newNoteImportant={newNoteImportant} newNoteContentRef={newNoteContentRef}
      setNewNoteContent={setNewNoteContent} setNewNoteImportant={setNewNoteImportant} />
    </div>
  )
}

export default App;