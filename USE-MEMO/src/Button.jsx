import { useState } from 'react'

function Button() {
    const [ color, setColor ] = useState('false');
    const onChange = () => setColor('red');

  return (
    <div>
        <button style={{ backgroundColor: "green" }} onClick={onChange}>Click</button>
    </div>
  )
}

export default Button