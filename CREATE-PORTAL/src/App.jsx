// import { createPortal } from "react-dom";
import { useState } from "react"
import PortalTest from "./PortalTest";
import Model from "./Model";

function App() {
  const [ open, setOpen ] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
    <h1>App Component</h1>
    {/* <PortalTest /> */}
    <button onClick={() => setOpen(true)}>Open Model</button>

    <Model isOpen={open} onClose={() => setOpen(false)}>
      <h1>Model Content</h1>
      <p>This is a simple model without context.</p>
    </Model>
    </div>
  )
}

export default App
