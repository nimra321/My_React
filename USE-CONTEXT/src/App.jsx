import Navbar from "./authContext/Navbar";
import { AuthProvider } from "./authContext/AuthContext";

function App() {

  return (
    <div>
      <AuthProvider>
          <Navbar />
      </AuthProvider>
    </div>
  )
}

// import {  useState } from "react"
// import ThemeContext from "./themeContext/ThemeContext";
// import Toolbar from "./themeContext/Toolbar";

// function App() {
//   const [ theme, setTheme ] = useState("light");

//   return (
//     <div>
//       <ThemeContext.Provider value={{theme, setTheme}}>
//           <Toolbar />
//       </ThemeContext.Provider>
//     </div>
//   )
// }




// function Patent() {
//   return <Child />
// }

// function Child() {
//   const { name } = useContext(UserContaxt);
//   return (
//     <div>
//       <h3>Name : {name}</h3>
//       <GrandChild  />
//     </div>
//   )
// }

// function GrandChild() {
//   const { name, role } = useContext(UserContaxt);
//   return <h3>Welcome {name} - your role is {role}!</h3>
// }

export default App
