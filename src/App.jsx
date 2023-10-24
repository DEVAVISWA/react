import React, { createContext, useState } from 'react'
import Profile from './components/Profile'



const profileNameContext= createContext()

function App() {
  
  const[profileName,setProfileName]= useState('')
  return (
    <profileNameContext.Provider value={{profileName,setProfileName}}>    
      <div>
        <Profile/>
      </div>
    </profileNameContext.Provider>
  )
}

export {App as default, profileNameContext}