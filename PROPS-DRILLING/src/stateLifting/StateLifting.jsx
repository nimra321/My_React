import { useState } from "react"

function Parent() {
    const [ text, setText ] = useState("");

    return (
        <div>
            <InputBox onChange={setText} />
            {/* <h3>Typed : { text }</h3> */}
            <SharedState value={ text } />
        </div>
    )
}

function InputBox({ onChange }) {
    return (
        <div>
            <input type="text" onChange={ (e) => { onChange(e.target.value)}} />
            
        </div>
    )
}

function SharedState( { value }) {
    return <h3>Shared State Typed : { value }</h3>
}

function StateLifting() {
  return (
    <div>
        <Parent />
    </div>
  )
}

export default StateLifting