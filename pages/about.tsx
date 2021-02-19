import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";
// import Header from "../components/header" 


// get static props
function About(props) {
  // tetsing API call
   console.log(props.pages)
  return (
      <div>
      <Container fluid="md">
        <h2> {props.pages.Title}</h2>
    
            <Row>
                <Col style={{justifyContent:'center'}}>
                {/* {props.pages.description} */}
                </Col>
            </Row>
        </Container>
      
      </div>
  )
}

export default About

export async function getStaticProps(){
  // using dotenv and getting the url from env file.
  const {API_URL} = process.env

  const response = await axios.get(`${API_URL}/pages`)
 
  return {
    props: {
      // note if you want the entore aray of data use pages: response.data to get all
        pages: response.data[1]
        
    }
    
}

}