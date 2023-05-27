import { useState } from 'react'

function UseStateHook() {
    // const [state, setState] = useState(initialValue) => Syntax
    const [counter, setCounter] = useState(0)
    const [userValue, setUserValue] = useState(0)
    // let a = 20, b = '30'
    // a+b
    const increment = () => {
        setCounter(counter + 1)
    }
    const decerement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    const reset = () => {
        setCounter(0)
    }

    const addByValue = (value) => {
        // console.log(value)
        let userData = Number(value)
        // console.log(typeof(userData))
        setCounter(counter + userData)
    }
    // const getValue = (e) => {
    //     setUserValue(e.target.value)
    // }

  return (
    <div>
        <h1>Use State Hook</h1>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decerement}>Decreement</button>
        <button onClick={reset}>Reset</button>
        <input type='text' onChange={(e)=>setUserValue(e.target.value)}  />
        <button onClick={()=>addByValue(userValue)}>Add By Value</button>
    </div>
  )
}

export default UseStateHook