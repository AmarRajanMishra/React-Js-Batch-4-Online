import React from 'react'
import CardData from '../ProjectData/CardData'


function Projects() {
  return (
    <div>
      {
        CardData.map((data)=>{
          return(
            <div className='card-1' key={data.id}>
              <h1>{data.title}</h1>
              <img src={data.imgSrc}/>
              <p>{data.description}</p>
        </div>
          )
        })
      }
        
        
    </div>
  )
}

export default Projects