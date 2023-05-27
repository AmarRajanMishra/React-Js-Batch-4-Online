import { useState } from 'react'

function GetInput() {
    const [userInput, setUserInput] = useState('')
    const getUserInput = (e) => {
        // console.log(e.target.value)
        setUserInput(e.target.value)
    }
  return (
    <div>
        <input type='text' placeholder='Enter Value' onChange={(e)=>getUserInput(e)} />
        <h1>{userInput}</h1>
    </div>
  )
}

export default GetInput



{/* <input type='text' id='userinput' />

let userInput = getElementById('userinput')
userInput.value */}