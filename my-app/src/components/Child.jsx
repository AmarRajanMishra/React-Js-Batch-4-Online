import React from 'react'

function Child(props) {
    
    // let obj= {
    //     StdnName : "Amar",
    //     Age : 20 
    // }
    // console.log(obj.Age)
    // let a = 'Hello'
  return (
    <div>
        <h1> To Child Component</h1>
        <h1>Hello My Name is {props.data.Name}</h1>
        <h2>My Age is {props.data.Age}</h2>
        <h3>Bio : {props.data.Bio}</h3>
    </div>
  )
}

export default Child