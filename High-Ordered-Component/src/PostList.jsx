
function PostList({ data }) {
  return (
    <ol>
        { data.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
    </ol>
  )
}

export default PostList