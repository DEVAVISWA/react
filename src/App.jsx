function Hello(props){
  console.log(props)
  return (
    <p>vanakam bhaa {props.username}</p>
  )
}

function reuseComponent(){
  let user1="deva"
  let user2="viswa"
  return (    
    <div>
      <Hello></Hello>
      <Hello />
      <Hello username={user1} />
      <Hello username={user2} />      
    </div>
  )
}
//gonna study
export default reuseComponent