
import axios from "axios";
import Card from "../components/storycard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import fetch from 'isomorphic-unfetch'
// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home=(props)=> {

  //  console.log(props.movies)
  return (
    <h2> home page</h2>
//     <Container fluid>
//       <Row style={{justifyContent:'center'}}>
//       {props.movies.map(movie=>(
//         <div style={{margin:'2rem'}} >
//             <Card
//             key={movie.id}
//             movie={movie}
//             />
//         </div>
//       ))}
//       </Row>
    
//  </Container>
  )
}


// export async function getStaticProps(){
//   // using dotenv and getting the url from env file.
//   const {API_URL} = process.env

//   // const res = await fetch(`${API_URL}/movies`)
//   // const response = await res.json()
//   const response = await axios.get(`${API_URL}/movies`)
  
 

//   return {
//     props: {
//         movies: response.data
//     }
// }

// }

export default Home