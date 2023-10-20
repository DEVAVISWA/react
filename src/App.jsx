import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



function App() {
    const [data, setData] = useState(null)

    const fetchPost = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        setData(posts)
    }


    useEffect(() => {
        fetchPost()
    }, [])
    return (
        <div>
            <h2>The API datas are</h2>
            {
                data ? (
                    <ul>
                        {
                            data.map(titles =>
                                <li key={titles.id}> {titles.title} </li>)
                        }
                    </ul>
                ) : (<p>Fetching datas...</p>)
            }
        </div>
    )
}

export default App