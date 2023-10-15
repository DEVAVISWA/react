import React from 'react'

function App({note}) { //destructuring of obj from main.jsx
  console.log(note)
  return (
    <div>
      <ul>
        <li> {note[0].content} </li>
        <li> {note[1].content} </li>
        <li> {note[2].content} </li>
        <li> {note[3].content} </li>        
      </ul>
    </div>    
  )
}

export default App