const inputReducer = (state = [], action) => {
    switch (action.type) {
      case 'NewNote':
        return state.concat(action.payload)
  
      case 'Toogle':
        const id = action.payload.id //get the value first and store it in a const so that we dont change the state directly
        
        const importanceToChange = state.find(n => n.id === id) //get the current state
        
        const changedNote = {  //make necessary change
          ...importanceToChange,
          importance : !importanceToChange.importance
        }
  
        return state.map(note =>
            note.id !== id ? note : changedNote
          )
  
      default:
        return state
    }
  
  }

  export const createNote =(typedNote, n) => {
    return {
      type:'NewNote',
      payload : {
        typedNote,
        id: n+1,
        importance: false
      }
    }
  }

  export const toogleImportanceOfID = (id) => {
    // console.log('clicked', id)
    return{
      type : 'Toogle' ,
      payload : {
        id: id ,
      }
    }     
  }

  export default inputReducer