import {useState} from 'react'
import axios from 'axios'

function UsingAxios() {
    const [users, setUsers] = useState([])
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div>
        <h1>Get Data From API Using Axios</h1>
        <button onClick={()=>getData()}>Get Data</button>
        <div>
            {
                users.map((user)=>{
                    return(
                        <div>
                            <h1>{user.name}</h1>
                            <h2>{user.username}</h2>
                            <h3>{user.email}</h3>
                            <h5>{user.phone}</h5>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UsingAxios