//Using props
function Hello(props) {
  console.log(props)
  return (
    <p>Hello {props.userName}</p>
  )
}

function greeting() {
  let user1='deva'
  let user2='aravind'
  return (
    <div>
      Greetings
      <Hello userName={user1} />
      <Hello userName={user2}/>
      <Hello userName={'ganesan'} />
      <Hello userName={'booma'} />
    </div> 
  )
}

export default greeting

//eg 2
// function Message(props) {
//   console.log(props)
//   return(
//     <p>rathiri pathu mani<h1>{props.time}</h1>ku maadi ku vandha</p>
//   )
// }

// function greet(){
//   return (
//     <div>
//       <Message time={'rendu mani'}/>
//     </div>
//   )
// }
// export default greet