
import './App.css'
import Hello from './component/Hello'
import Bye from './component/Bye';
import Props from './component/Props';

function App() {

  function handleClick () {
    alert("Button Clicked");
  }

  const handleInput = (event) =>  {
    console.clear();
    console.log("Value : ", event.target.value);
  };

  const name = "Laiba Azam";
  const nameStyle = {
    color: "red",
    backgroundColor: "yellow"
  }

  return (
    <>
      <h1 style={nameStyle}>Nimra Jahangir, { name } </h1>
      <Hello />
       <Props name = "Nimra" age = "24" city = "Lahore" label = "Submit" />
      <Bye />
     <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("Hello from inline function!") }>Say Hello</button>
      <br />
      <input type="text" name="" id="" onChange={handleInput} placeholder='Type Something' />
    </>
  )
}

export default App
