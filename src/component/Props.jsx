function Props({ name, age, city, label }) {

    return (
        <>
            <h1>Props Component...</h1>
            <h2>Hello, {name}</h2>
            <p>Age : {age}</p>
            <p>City : {city}</p>
            <button onClick={ () => alert("THis is Click Button.")}>{ label }</button>
        </>
    )
}

export default Props