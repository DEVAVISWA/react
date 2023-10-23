import React from 'react'

function GrandChildComp({data}) {
  return (
    <div>
        <h3>GrandChildComp</h3>
        <i>Message from parent :- {data} </i>
        <hr />
    </div>
  )
}

export default GrandChildComp