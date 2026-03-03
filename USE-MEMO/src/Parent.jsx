import { useState, useMemo } from 'react'

function Parent() {
    const [count, setCount ] = useState(0);

    const user = useMemo(() => ({    
        name: 'John Doe', 
        age: 30 
    }), []);

    console.log("Parent Rendered");
  return (
    <div>
        <h2>Parent Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <Child user={user} />
    </div>
  )
}

function Child({ user }) {
    console.log("Child Rendered");
  return (
    <div>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
    </div>
  )
}

export default Parent