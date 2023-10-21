import React, { useState } from 'react'
import Home from './component/home'
import Notes from './component/notes'
import Users from './component/users'


function App() {

  const[page,setPage]=useState('home')

  const toPage = (page) => (event)=> {
    event.preventDefault()
    setPage(page)
  }

  const contentToBeViewed= () =>{
    if(page ==='home'){
      return <Home />
    }else if(page ==='notes') {
      return <Notes />
    }else if(page ==='users'){
      return <Users />
    }
  }

  const padding ={
    padding: 5,
  }
  return (
    <div>
      <div>
        <a href="" style={padding} onClick={toPage('home')}>Home</a>
        <a href="" style={padding} onClick={toPage('notes')}>Notes</a>
        <a href="" style={padding} onClick={toPage('users')}>Users</a>
      </div>
      { contentToBeViewed() }
    </div>
  )
}

export default App

