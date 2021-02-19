import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// used for publicRunTimeconfig
import getConfig from 'next/config'
import axios from "axios";
 
export default function Movie(props){
    console.log(props.movie)
    return ( 
        <>
        
        <Container fluid="md">
    <h2>{props.movie.title}</h2>
            <Row>
                <Col >
                   {props.movie.description}
                </Col>
            </Row>
        </Container>
        </>
        
     );
}

// publicRuntime config used to present process.env to be on the client isde as well and serverside. 
// set up in next.config.js 
// const {publicRuntimeConfig} = getConfig()

// maybe replace this page with static props as the content doesnt change very much.
// grabs data accoring to the movie Id 
// to do so its in the context of server side props.
export async function getServerSideProps(context){
    // this will not be on the browser as it serverside props
    // it will be on the serverside so use terminal to view
    // context comes with sever side props
      // console.log(context)
    //  const id= context.query.id
    // getting the slug from the context variable.
     const slug= context.query.slug
    //  console.log(id)

  
    
    // watch and learn- staic routes, nested routes & navigation 13min
    // gettiing the dynamic id route from context for each page to be linked up.
    // get movies from id later changed it to below getting movie from slug
    // const response = await axios.get(`${publicRuntimeConfig.API_URL}/movies/${id}`)
    // strapi doesnt know how to filter from slug have to use filters => /movies?slug=${slug}
    //  const response = await axios.get(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)

const {API_URL} = process.env

const response = await axios.get(`${API_URL}/movies?slug=${slug}`)
    
   
  
    return {
      props: {
      //  since we are now making anAPi call based n filtering from the slu() it only has one result in the array 
      // we get an enitire array not juts the Movie object with previous APIcall above
      // we have to get the first object in the array of objects
        movie : response.data[0]
      }
  }
}
