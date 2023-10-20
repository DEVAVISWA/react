import React, { useContext } from 'react'
import { ProfileContext } from '../App'


function ProfileComponent() {
    const {profileName,setProfileName}= useContext(ProfileContext)

    const profileNameHandler = (event) =>{
        setProfileName(event.target.value)
    }

  return (
    <div>        
        <input type="text" onChange={profileNameHandler} value={profileName}/> 
        <div>the name is :- {profileName} </div>
    </div>
  )
}

export default ProfileComponent