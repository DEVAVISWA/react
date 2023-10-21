import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Notes from './component/notes'
import Users from './component/users'
import Home from './component/home'

function App() {
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
        <Route path='/notes' element={<Notes />}></Route>
        <Route path='/users' element={ <Users /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>

    </Router>
  )
}

export default App