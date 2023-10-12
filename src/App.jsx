const App= () =>{
  
  console.log('hello from component')
  const now= new Date()
  console.log(now)
  
  return (
  <div>
    <p>Hello world! its now { now.toString() }</p>
  </div>
  
  )
}

export default App;
//changed