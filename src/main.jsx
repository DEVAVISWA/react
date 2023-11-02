import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'

//define a initial state
let initialState = {
    count: 0
}
//define a reducer
const countReducer = (state = initialState.count, action) => {
    switch (action.type) {
        case 'INCR':
            return state + 1
        case 'DECR':
            return state - 1
        default:
            return state
    }
}

//create store
const store = createStore(countReducer)
console.log(store.getState())  //console to view the current state

//dispatch
store.dispatch({
    type: 'INCR'
})
console.log(store.getState()) // console to view the changed state

store.dispatch({
    type: 'INCR'
})
console.log(store.getState())

store.dispatch({
    type: 'INCR'
})
console.log(store.getState())

store.dispatch({
    type: 'DECR'
})
console.log(store.getState())


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
