//reusing component
function Hello(){
  return(
    <p>Hello world</p>
  )
}

function greeting () {
  return(
    <div>
      Greetings 
      <Hello />
      <Hello />
      <Hello />
      <Hello/>
    </div>
  )
}

export default greeting