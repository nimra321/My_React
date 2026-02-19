import { useState, useEffect } from 'react'

function WindowSizeTraker() {
    const [ width, setWidth ] = useState(window.innerWidth);
    
    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Cleanup");
        }
    }, []);

    

  return (
    <div>
        <h2>Window Width Tracker</h2>
        <p>Current Width : {width}px </p>
    </div>
  )
}

export default WindowSizeTraker