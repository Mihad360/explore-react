import { useEffect, useState } from "react"
import Person from "./person"

export default function Persons(){
    const [persons , setPersons] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])

    return (
        <div className="box">
            <h3>Persons : {persons.length}</h3>
            {
                persons.map(person => <Person person={person}></Person>)
            }
        </div>
    )
}