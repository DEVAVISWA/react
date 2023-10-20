import React, { createContext, useState } from 'react'
import ProfileComponent from './components/Profile'

const ProfileContext= createContext()
function App() {
    const[profileName,setProfileName]=useState('')
  return (
    <div>
        <h1>Profile component</h1>
        <ProfileContext.Provider value={{profileName,setProfileName}}>
            <ProfileComponent />
        </ProfileContext.Provider>
    </div>
  )
}

export {App as default,ProfileContext}