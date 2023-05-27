import axios from 'axios'
import { useState } from 'react'

function GithubUserData() {
    const [users, setUsers] = useState([])
    const getData = ()=>{
        axios.get('https://api.github.com/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    }
    console.log('hello')
  return (
    <div>
        <h1>Get GitHub User Data</h1>
        <button onClick={()=>getData()}>GetData</button>
        <div>
            {
                users.map((user)=>{
                    return(
                        <div key={user.id}>
                            <h1>{user.login}</h1>
                            <img src={user.avatar_url} alt="" />
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default GithubUserData