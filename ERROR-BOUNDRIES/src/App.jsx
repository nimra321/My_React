import UserProfile from "./UserProfile";
import ErrorBoundry from "./ErrorBoundry";

function App() {

  const userData = {
    name: "Nimra Jahangir",
    age: 25,
  };

  const userData1 = null;

  return (
    <>
    <ErrorBoundry>
      <UserProfile userData={userData} />
    </ErrorBoundry>
    
    <ErrorBoundry fallback={<p> Error in User PRofile </p>}>
      <UserProfile userData={userData1} />
    </ErrorBoundry>
    </>
  )
}

export default App
