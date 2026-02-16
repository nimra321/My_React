function Bye () {

    const fruits = ["Apple", "Banana", "Orange", "Pineapple"];

    const user = {
        firstName : "Nimra", 
        lastName : "Jahangir",
        age : 24
    }

    function fullName(user) {
        return `${user.firstName} ${user.lastName}`;
    }
    
    return (
        <>
            <h1>Bye Component...</h1>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={fruit}>{index} : {fruit}</li>
                ))}
            </ul>

            <h2>User Details</h2>
            <p>Full Name : {fullName(user)}</p>
            {/* <p>First Name : {user.firstName}</p>
            <p>Last Name : {user.lastName}</p> */}
            <p>Age : {user.age}</p>
        </>
    )
}

export default Bye