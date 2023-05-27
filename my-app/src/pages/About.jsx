
import ChildData from '../components/ChildData'
import Common from '../components/Common'
import profile from '../images/1.jpeg'

function About() {
  let userData = {
    Intro : "Hello THis Rajat From UP",
    imgSrc: profile
  }
  
  return (
    <>
     <h1>About Page</h1>
     <ChildData data={userData}  />


    </>
  )
}

export default About