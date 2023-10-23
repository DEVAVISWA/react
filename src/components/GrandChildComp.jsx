import React, { useContext } from 'react'
import { MessageContext } from '../App'

function GrandChildComp() {
    const {data,coins}= useContext(MessageContext)

    let coinSum = () => {
        return coins.reduce((a,v)=> {
            return a+=v
        },0)
    }

  return (
    <div>
        <h3>GrandChildComp</h3>
        <i>Message from parent :- {data} </i> <br />
        <b>the total number of coins are {coins} & sum is {coinSum()} </b>
        <hr />
    </div>
  )
}

export default GrandChildComp