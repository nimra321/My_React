import { useCallback, useState } from "react"

function Counter() {
    const [ count, setCount ] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [] );

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment Buttun</button>
    </div>
  )
}

export default Counter