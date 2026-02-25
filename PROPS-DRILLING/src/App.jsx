import StateLifting from "./stateLifting/StateLifting"

function Parent() {
  return <Child name = "Nimra Jahangir"/>
}

function Child({ name }) {
  return <GrandChild names = { name }/>
}

function GrandChild({ names }) {
  return <h1>GrandChild name : { names }</h1>
}

function App() {
  return (
    <div>
      <Parent />
      <StateLifting />
    </div>
  )
}

export default App
