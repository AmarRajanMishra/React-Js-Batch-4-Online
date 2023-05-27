



function First(){
    return(
        <>
            <h1>Welcome To React Class</h1>
            <h2> Hello Next Line</h2>
        </>
    )
}

// export default First

function CompA(){
    return(
        <h1>Component A</h1>
    )
}


function CompB(){
    return(
        <h1>Component B</h1>
    )
}

export function CompC(){
    return(
        <h1>Component C</h1>
    )
}

const CompD = () => {
    return(
        <h1>Component D</h1>
    )
}

export const CompE = () => {
    return(
        <h1>Component E</h1>
    )
}

export {CompA, CompB, CompD, First}