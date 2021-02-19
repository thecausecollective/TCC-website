import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "../components/storycard"
import axios from "axios";

// import Header from "../components/header" 


// get static props
function Ngavaka(props) {
   console.log(props.blogs)
  return (
      <div>
      <Container fluid="md">
        <Row >
          <Col style={{display: "flex", justifyContent: "center"}}>
          {props.blogs.map(blog=>(
        <div style={{margin:'2rem'}} >
            <Card
            key={blog.id}
            blog={blog}
            />
        </div>
      ))}
              
        </Col>
      </Row>
    </Container>
      
      </div>
  )
}

export default Ngavaka


export async function getStaticProps(){
  // using dotenv and getting the url from env file.
  const {API_URL} = process.env

  // const res = await fetch(`${API_URL}/movies`)
  // const response = await res.json()
  const response = await axios.get(`${API_URL}/blogs`)
  
 

  return {
    props: {
        blogs: response.data
    }
}

}


