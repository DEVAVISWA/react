import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        id: 1,
        content: "abcd",
        important: true
    },
    {
        id: 2,
        content: "efgh",
        important: true
    },
    {
        id: 3,
        content: "ijkl",
        important: false
    },
    {
        id: 4,
        content: "mnop",
        important: false
    },
    {
        id: 5,
        content: "qrst",
        important: true
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
