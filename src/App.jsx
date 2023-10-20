import React from 'react'

function Grandchild ({msgFromChild}) {
    console.log(msgFromChild)
    return(
        <div>
            <h3>Grand Child Component</h3>
        </div>
    )
}

function Child ({msgfFromParent}) {
    console.log(msgfFromParent)
    return(
        <div>
            <h2>Child Component</h2>  
            <Grandchild msgFromChild={msgfFromParent} />          
        </div>
    )
}

function App() {
    const message="Hello from PARENT"
  return (   
    <div>
        <h1>Parent Component</h1>
        <Child msgfFromParent={message} />
    </div>
  )
}

export default App