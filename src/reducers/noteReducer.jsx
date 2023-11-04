const inputReducer = (state = [], action) => {
    switch (action.type) {
        case 'NewNote':
            return state.concat(action.payload)

        case 'Toogle':
            const id = action.payload.id //get the value first and store it in a const so that we dont change the state directly

            const importanceToChange = state.find(n => n.id === id) //get the current state

            const changedNote = {  //make necessary change
                ...importanceToChange,
                importance: !importanceToChange.importance
            }

            return state.map(note =>
                note.id !== id ? note : changedNote
            )

        default:
            return state
    }

}

export default inputReducer