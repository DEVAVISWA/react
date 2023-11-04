import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import inputReducer from './reducers/noteReducer.jsx'
import { Provider } from 'react-redux'

const inputStore = createStore(inputReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={inputStore}>
        <App />
    </Provider>)
