import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes =[
    {
        id: 1,
        content: 'spot light',
        important: true
    },
    {
        id: 2,
        content: "moon light",
        important: true
    },
    {
        id: 3,
        content: "what",
        important: false
    },
    {
        id: 4,
        content: "didnt you get your moonlight",
        important: true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
