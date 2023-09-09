import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    function barao(){
        const newcount = count + 1;
        setCount(newcount)
    }
    function komao() {
        const newkomao = count - 1;
        setCount(newkomao)
    }

    return (
        <div style={{border: '2px solid red'}}>
            <h3>Counter : {count}</h3>
            <button onClick={barao}>Upit</button>
            <button onClick={komao}>Downit</button>
            
        </div>
    )
}
