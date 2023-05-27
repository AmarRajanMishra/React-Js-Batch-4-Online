
import profile from '../images/1.jpeg'
import Common from '../components/Common'
import ChildData from '../components/ChildData'


function Home(){
    let userData = {
        Intro : "My Name Is Rajan and this....",
        imgSrc : profile
    }
    return(
        <>  
            <h1>Home Page</h1>
            <ChildData data={userData} />
           {/* Props => With The Help of Props we can pass data from parent component child component */}
        </>
    )
}

export default Home