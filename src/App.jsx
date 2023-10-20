import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'





function App() {

    const [posts, setPosts] = useState(null)

    const fetchPost = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log(response)
        let data = await response.json()
        // console.log(posts)
        setPosts(data)
    }
    
    useEffect(() => {
        fetchPost()
    }, [])    

    return (
        <div>
            <h2>API Datas</h2>
            {
                posts ? (
                    <ul>
                        {
                            posts.map(post =>
                                <li key={post.id}>{post.title} </li> )
                        }
                    </ul>
                ) : ( <p>Fetcing Datas....</p> )
            }
        </div>
    )
}

export default App


//NORMAL FETCH CALL
// fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response=>response.json())
//         .then(post=> console.log(post))