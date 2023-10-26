import React from 'react'
import { useReducer } from 'react'

function App() { //1
  const initialState = {
    value: ''
  }

  //2                     //3
  const inputReducer= (state, action) =>{
   switch (action.type) { //9 
      case 'change' : 
        return {value: action.payload} //10
        default :
        return state //11
        
    }
  }  

  //4                                            //5    
  const [state,dispatch] = useReducer(inputReducer,initialState)
  return (
    
    <div>
      <input type="text" placeholder='type your name' 
                //6
      onChange={e=>dispatch({
        type: 'change',      //7 dispatch first argument
        payload : e.target.value     //8 dispatch sec argument
      })} />
       <p>you have typed :- {state.value}</p>  {/*12 */}
    </div>
  )
}

export default App