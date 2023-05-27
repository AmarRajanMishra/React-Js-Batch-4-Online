import { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(20)

    // useEffect(()=>{
    //     // Runs on Every Changes
    // })

    // useEffect(()=>{
    //     // console.log('Use Effect Hook')
    //     // console.log(document.title)
    //     document.title = `(${count}) WhatsApp` 
    //     // document.title = '(' + count + ') WhatsApp'
    //     // console.log(count)
    // })

    // useEffect(()=>{
    //     console.log('Use Effect Hook')
    //     // Run Only Once
    // }, [])

    useEffect(()=>{
        console.log('Use Effect Hook')
    }, [count])

  return (
    <div>
        <h1>Use Effect Hooks {count}</h1>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        <button onClick={()=>setCountTwo(countTwo+1)}>Click Me {countTwo}</button>
    </div>
  )
}

export default UseEffectHook