import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Notes from './component/notes'
import Users from './component/users'
import Home from './component/home'
import NoteList from './component/NoteList'

function App({notes} ) {
  // console.log(notes)
  const padding= {
    padding: 5
  }
  return (
    <Router>
      <div>
        <Link to={'/'} style={padding}>Home</Link>
        <Link to={'/notes'} style={padding}>Notes</Link>
        <Link to={'/users'} style={padding}>Users</Link>
      </div>
      <Routes>
        <Route path='/notes' element={<Notes notes={notes}/>}></Route>
        <Route path='/users' element={ <Users /> } />
        <Route path='/' element={ <Home /> } />
        
        <Route path='/notes/:noteid' element={<NoteList notes= {notes} />} />
      </Routes>

    </Router>
  )
}

export default App