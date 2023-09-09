import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Team from './team'
import Users from './users'
import Friends from './friends'
import Friend from './friend'
import Persons from './persons'
import Person from './person'


function App() {
  const [count, setCount] = useState(0)
  function click(){
    alert('it is valid')
  }
  const click2 = () => {
    alert('it is valid')
  }
  function click3(number){
    alert(number + 5)
  }
  return (
    <>
      <h1>React</h1>
      <Persons></Persons>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={click}>Click me</button>
      <button onClick={click2}>Click 2</button>
      <button onClick={() => alert('it is unvalid')}>CLick 3</button>
      <button onClick={() => click3(4)}>Click 4</button>
    </>
  )
}

export default App
