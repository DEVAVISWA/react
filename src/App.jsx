import React, { useState } from 'react'
import Childcomp from './components/Childcomp'



function App() {
  const[data,setDate]= useState('Deva Viswa')
  return (
    <div>
      <h1>Parent Comp</h1>
      <i>message :- {data}</i>
      <hr />
      <Childcomp data={data}/>
    </div>
  )
}

export default App