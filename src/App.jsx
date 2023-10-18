import React from 'react'
import Note from './components/Note'

function Baap ({notes}) {
  console.log(notes)
  return (
    <div>
      <ul>
        {
          notes.map(datas => 
            <Note key={datas.id} datas={datas}/> )
        }
      </ul>
    </div>
  )
}

export default Baap