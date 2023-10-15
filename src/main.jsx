import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

function App() {
    return (
        <p>
            hello from main.jsx
        </p>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
