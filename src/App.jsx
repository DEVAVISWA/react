// dynamically creating html

function timer () {
  const now = new Date()

  console.log(now)
  return(
    <div>
      hello its now {now.toString()}
    </div>
  )
}
export default timer