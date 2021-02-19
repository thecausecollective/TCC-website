import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";
// import Header from "../components/header" 


// get static props
function OurTeam(props) {
   console.log(props.pages)
  return (
      <div>
      <Container fluid="md">
      <h2>{props.pages.Title}</h2>
            <Row>
                <Col style={{justifyContent:'center'}}>
                <p>{props.pages.description}</p>
                </Col>
            </Row>
        </Container>
      
      </div>
  )
}

export default OurTeam
export async function getStaticProps(){
  // using dotenv and getting the url from env file.
  const {API_URL} = process.env

  const response = await axios.get(`${API_URL}/pages`)
  
  return {
    props: {
        pages: response.data[2]
    }
}

}


