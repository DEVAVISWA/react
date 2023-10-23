import React, { createContext, useState } from 'react'
import Childcomp from './components/Childcomp'

const MessageContext=createContext()

function App() {
  const[data,setDate]= useState('Deva Viswa')
  const[coins,setCoins]= useState([1,2,5,10])
  return (
    <div>
      <h1>Parent Comp</h1>
      <i>message :- {data}</i> <br />
      <b>The total coins are {coins}</b>
      <hr />
      <MessageContext.Provider value={{data,coins}} >
      <Childcomp />
      </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext}