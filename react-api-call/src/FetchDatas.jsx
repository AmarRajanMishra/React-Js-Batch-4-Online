import React, { useState } from 'react'

function FetchDatas() {
   const [users, setUsers] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    }
  return (
    <div>
        <h1>Fetch Data</h1>
        <button onClick={()=>getData()}>Get Data</button>
        {
            users.map((user)=>{
                return(
                    <div key={user.id}>
                        <h1>{user.title}</h1>
                        <img src={user.thumbnailUrl} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default FetchDatas