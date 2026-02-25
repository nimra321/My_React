import { useEffect, useEffectEvent, useState } from 'react'

function Timer() {

    const [ count, setCount ] = useState(0);

    const onTick = useEffectEvent(() => {
        console.log("Count : ", count);
        setCount( prev => prev + 1 );

    });

    useEffect(() => {
        const interval = setInterval(() => {
            onTick();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

  return (
    <div>
        <h1>Timer</h1>
        <h2>Count : { count }</h2>
    </div>
  )
}

export default Timer