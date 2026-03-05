import { useEffect, useState } from 'react'

function Post() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        setPost(data)
        }
        fetchPost();
    }, []);

  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {post.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Post