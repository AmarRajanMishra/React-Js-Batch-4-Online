import { useState, useEffect } from 'react'

function FetchData() {

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    useEffect(()=>{
        getData()
    })

  return (
    <div>
        <h1>User Data</h1>
        {/* <button onClick={()=>getData()}>Get Data</button> */}
    </div>
  )
}

export default FetchData