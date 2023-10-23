import React, { useState } from 'react'
import Childcomp from './components/Childcomp'



function App() {
  const[data,setDate]= useState('Deva Viswa')
  const[coins,setCoins]= useState([1,2,5,10])
  return (
    <div>
      <h1>Parent Comp</h1>
      <i>message :- {data}</i>
      <b>The total coins are {coins}</b>
      <hr />
      <Childcomp data={data} coins={coins}/>
    </div>
  )
}

export default App