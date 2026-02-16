import { useState } from 'react'

function Student() {

    const [ student, setStudent ] = useState({
        name : "Nimra Jahangir",
        grade : "A",
        city : "Lahore"
    })

    const changeCity = () => {
        setStudent({ ...student, city : "Islamabad" });
    }

  return (
    <div>
        <h2>Name : {student.name}</h2>
        <p>Grade : {student.grade}</p>
        <p>City : {student.city}</p>
        <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default Student