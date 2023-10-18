import React from 'react'

function Note({datas}) {
    console.log(datas)
  return (
    <div>
        <li>{datas.content}</li>
    </div>
  )
}

export default Note