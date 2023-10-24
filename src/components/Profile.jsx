import React, { useContext } from 'react'
import { profileNameContext } from '../App'

function Profile() {
    const {profileName,setProfileName}= useContext(profileNameContext)

    const profileNameHandler = (event) => {
        setProfileName(event.target.value)
    }

  return (
    <div>
        <input type="text" placeholder='type your name' onChange={profileNameHandler} value={profileName}/>
        <p>The name entered is :- {profileName} </p>
    </div>
  )
}

export default Profile