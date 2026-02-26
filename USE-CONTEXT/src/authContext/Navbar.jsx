import { useContext } from "react";
import { AuthContext } from "./AuthContext";


function Navbar() {
    const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
        <nav>
            { isLoggedIn ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}> Login</button>
            ) }
        </nav>
    </div>
  )
}

export default Navbar