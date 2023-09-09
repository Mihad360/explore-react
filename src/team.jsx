import { useState } from "react"

export default function Team(){
    const [start, setCount] = useState(11)

    function barao(){
        const upit = start + 1;
        setCount(upit)
    }

    function komao(){
        setCount(start - 1)
    }

    return (
        <div style={{
            border: '2px solid blue',
            margin: '20px',
            padding: '20px',
            borderRadius: '10px'
        }}>
            <h3>Players : {start}</h3>
            <button onClick={barao}>Barao</button>
            <button onClick={komao}>Komao</button>
        </div>
    )
}