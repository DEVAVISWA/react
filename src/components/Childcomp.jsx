import React from 'react'
import GrandChildComp from './GrandChildComp'

function Childcomp({data,coins}) {
  return (
    <div>
        <h2> Childcomp </h2>
        <i>message from parent :-  </i>
        <hr />
        <GrandChildComp data={data} coins={coins}/>
    </div>
  )
}

export default Childcomp