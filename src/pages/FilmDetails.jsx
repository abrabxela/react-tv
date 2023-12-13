import { Link, useParams } from "react-router-dom"


function FilmDetails(){
    const {filmId} = useParams();
    return(
        <>
        <h1>This is film ID : {filmId}</h1>
        <Link to={'/home'} >home</Link> 
        </>
        
    )
}

export default FilmDetails;