import { useState } from 'react'

function FetchData() {
    const [user, setUser] = useState([])
    
    
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            setUser(data)
        })
        .catch((err)=> console.log(err))
    }

   
    
  return (
    <div>
        <h1>Get Data From API</h1>
        <button onClick={()=>getData()}>Get Data</button>
        {
            user.map((userData)=>{
                return(
                    <div key={userData.id}>
                       <h1>{userData.username}</h1> 
                       <h2>{userData.name}</h2>
                       <h3>{userData.email}</h3>
                       <h4>{userData.phone}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FetchData


// {
//     Name : 'Sachin',
//     Age : 26,
//     Gender : 'Male'
// }

// {
//     "Name" : "Sachin",
//     "Age" : "26",
//     "Gender" : "Male"
// }