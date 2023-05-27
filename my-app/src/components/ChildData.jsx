import React from 'react'

function ChildData(props) {
    console.log(props.data)
  return (
    <div className=''>
        <h1>{props.data.Intro}</h1>
        <img src={props.data.imgSrc} />
    </div>
  )
}

export default ChildData