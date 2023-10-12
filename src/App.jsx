function Hello(){
  return (
    <p>vanakam bhaa</p>
  )
}

function reuseComponent(){
  return (
    <div>
      <Hello></Hello>
      <Hello />

      
    </div>
  )
}
export default reuseComponent