import React from 'react'

function Child({ click }) {

    console.log('Child rendered');

  return (
    <div>
        <button onClick={click}>Child Button</button>
    </div>
  )
}

export default React.memo(Child);