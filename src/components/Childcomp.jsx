import React from 'react'
import GrandChildComp from './GrandChildComp'

function Childcomp({data}) {
  return (
    <div>
        <h2> Childcomp </h2>
        <i>message from parent :-  </i>
        <hr />
        <GrandChildComp data={data}/>
    </div>
  )
}

export default Childcomp