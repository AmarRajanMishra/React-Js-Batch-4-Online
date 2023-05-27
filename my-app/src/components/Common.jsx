import React from 'react'

function Common(props) {
    console.log(props)
  return (
    <div>
        <div>
        <p>{props.data.Bio}</p>
      </div>
      <div>
        <img src={props.data.imgSrc} alt="myimage" />
      </div>
    </div>
  )
}

export default Common