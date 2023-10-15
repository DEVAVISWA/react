function Hello (props){
  return (
    <p>Hellon {props.username} {props.age} </p>
  )
}

function greet (){
  const AGE= 70
  return (
    <div>
    <Hello username= {"devaviswa"} age= {26-1} />
    <Hello username={'ganesan'} age= {AGE} />
    </div>
  )
}
export default greet