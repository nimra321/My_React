import { useEffect, useLayoutEffect } from 'react'

function Test() {

    useEffect(() => {
        console.log("useEffect Hook message.");
    }, []);

    useLayoutEffect(() => {
        console.log("useLayoutEffect Hook message.");
    }, []);
    
  return (
    <div>
        <h1>Test</h1>
    </div>
  )
}

export default Test