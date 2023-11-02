import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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
        case 'RESET':
            return 0
    
    }
}
 
const store = createStore(countReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
