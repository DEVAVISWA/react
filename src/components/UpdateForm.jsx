import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateForm({ selectedID, notes, setNotes, fetchNotes }) {

  const [selectedNote, setSelectedNote] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [editedImportant, setEditedImportant] = useState('');

  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/notes/${selectedID}`);
      // console.log(response.data);
      if (response.data) {
        setSelectedNote(response.data);
        setEditedContent(response.data.content);
        setEditedImportant(response.data.important);
      }
    } catch (error) {
      console.log('Error fetching the note:', error);
    }
  }

  useEffect(() => {
    fetchNote();
  }, [selectedID]);

  const updateNote = (event) => {
    event.preventDefault();

    console.log('updating the note...');

    // prepare the object to update
    let note = {
      id: selectedNote.id,
      content: editedContent,
      important: editedImportant,
    }

    axios
      .put(`http://localhost:3001/notes/${selectedNote.id}`, note)
      .then(response => {
        // console.log(response);
        console.log('Note updated successfully...');

        // update the state
        fetchNotes();
      })
      .catch(error => {
        console.log('Error updating note:', error);
      })
  }

  return (
    <div>
      <h3>Update Form</h3>
      <form onSubmit={updateNote}>
        <label>
          Content: &nbsp;&nbsp;
          <input
            value={editedContent}
            onChange={e => setEditedContent(e.target.value)}
          />
        </label>
        <br /><br />

        <label>
          Is Important: &nbsp;&nbsp;
          <select
            value={editedImportant ? 'true' : 'false'}
            onChange={e => setEditedImportant(e.target.value == 'true')}
          >
            <option>true</option>
            <option>false</option>
          </select>
        </label>

        <br /><br />
        <button type='submit'>Update Note</button>
      </form>
    </div>
  )
}

export default UpdateForm;


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function UpdateForm({ selectedID, notes, setNotes }) {

//   const [selectedNote, setSelectedNote] = useState(null)

//   const [editedContent, setEditedContent] = useState('')
//   const [editedImp, setEditedImp] = useState('')

//   const fetchNotes = async () => {
//     try {
//       let response = await axios.get(
//         `http://localhost:3001/notes/${selectedID}`
//       );
//       // console.log(response.data)
//       if (response.data) {
//         await setSelectedNote(response.data)
//         setEditedContent(response.data.Content)
//         setEditedImp(response.data.important)
//       }
//     } catch (error) {
//       console.log("failed fetching data", error);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, [selectedID]);

//   const updateNote = (event) => {
//     event.preventDefault()
//     console.log('updating the notes....')
//   }

//   return (
//     <div>
//       <h3>Update Notes form</h3>
//       <form onSubmit={updateNote}>
//         <label>
//           Content : &nbsp;&nbsp;&nbsp;&nbsp;
//           <input value={editedContent}
//           onChange={e => setEditedContent(e.target.value)} />
//         </label>
//         <br />
//         <br />

//         <label>
//           Is Important : &nbsp;&nbsp;
//           <select
//           value={editedImp ? 'true' : 'false'}
//           onChange={e => setEditedImp(e.target.value=='true')}>
//             <option>True</option>
//             <option>False</option>
//           </select>
//         </label>
//         <br />
//         <br />
//         <button type='submit'>Update Note</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateForm;
