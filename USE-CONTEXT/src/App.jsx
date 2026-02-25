import { createContext, useContext } from "react"

const UserContaxt = createContext();

function App() {
  
  const users = { name: "Anam", role: "Admin" };
  // const userName = "Nimra";

  return (
    <div>
      <UserContaxt.Provider value={ users }>
        <Patent />
      </UserContaxt.Provider>
    </div>
  )
}

function Patent() {
  
  return <Child />
}

function Child() {
  const { name } = useContext(UserContaxt);
  return (
    <div>
      <h3>Name : {name}</h3>
      <GrandChild  />
    </div>
  )
}

function GrandChild() {
  const { name, role } = useContext(UserContaxt);
  return <h3>Welcome {name} - your role is {role}!</h3>
}

export default App
