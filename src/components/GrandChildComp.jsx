import React from 'react'

function GrandChildComp({data,coins}) {

    let coinSum = () => {
        return coins.reduce((a,v)=> {
            return a+v
        },0)
    }

  return (
    <div>
        <h3>GrandChildComp</h3>
        <i>Message from parent :- {data} </i>
        <b>the total number of coins are {coinSum(coins)} </b>
        <hr />
    </div>
  )
}

export default GrandChildComp