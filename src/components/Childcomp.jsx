import React from 'react'
import GrandChildComp from './GrandChildComp'
import { useContext } from 'react'
import { MessageContext } from '../App'

function Childcomp() {
    const {data,coins} = useContext(MessageContext)
    // console.log(data,coins)
  return (    
    <div>
        <h2> Childcomp </h2>
        <i>message from parent :- {data}  </i> <br />
        <b> {coins} </b>
        <hr />
        <GrandChildComp />
    </div>
  )
}

export default Childcomp