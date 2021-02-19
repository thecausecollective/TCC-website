import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import axios from "axios";
import {useRouter} from "next/router"
// import Header from "../components/header" 


// get static props
function Posts(props) {
   
   console.log(props.posts)
  return (
      <div>
      <Container fluid="md">
    
    
            <Row>
                <Col style={{justifyContent:'center'}}>
                   <h2>{props.posts.title}</h2>
                   <p>{props.posts.description}</p>
                </Col>
            </Row>
        </Container>
      
      </div>
  )
}

export default Posts


// export async function getServerSideProps(context){
//     // this will not be on the browser as it serverside props
//     // it will be on the serverside so use terminal to view
//     // context comes with sever side props
//       console.log(context)
//     //  const id= context.query.id
//     // getting the slug from the context variable.
//      const slug = context.query.slug
//     //  console.log(id)

  
    
//     // watch and learn- staic routes, nested routes & navigation 13min
//     // gettiing the dynamic id route from context for each page to be linked up.
//     // get movies from id later changed it to below getting movie from slug
//     // const response = await axios.get(`${publicRuntimeConfig.API_URL}/movies/${id}`)
//     // strapi doesnt know how to filter from slug have to use filters => /movies?slug=${slug}
//     //  const response = await axios.get(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)

// const {API_URL} = process.env

// const response = await axios.get(`${API_URL}/blogs?slug=${slug}`)
    
   
  
//     return {
//       props: {
//       //  since we are now making anAPi call based n filtering from the slug() it only has one result in the array 
//       // we get an enitire array not juts the Movie object with previous APIcall above
//       // we have to get the first object in the array of objects
//         posts : response.data[0]
//       }
//   }
// }

const {publicRuntimeConfig} =getConfig()
export async function getServerSideProps (context){
   
    const {API_URL} = process.env
    // need public runtime copnfig because we nee fto acces APIuRL on clinet side./
    // console.log(context)
    const slug = context.query.slug
    // publicruntime cofig needs the env variable on clinet side and serverside at build time.
    // axios wasnt working for some reason.
    const response = await axios.get(`${API_URL}/blogs?slug=${slug}`)
    // const res = await fetch(`${publicRuntimeConfig.API_URL}/blogs?slug=${slug}`)
    // const response = await res.json()
    return {
              props: {
               //  since we are now making anAPi call based n filtering from the slug() it only has one result in the array 
               // we get an enitire array not juts the Movie object with previous APIcall above
               // we have to get the first object in the array of objects
                posts : response.data[0]
              }
           }
  }
  

// export async function getStaticProps(){
//   // using dotenv and getting the url from env file.
//   const {API_URL} = process.env

//   const response = await axios.get(`${API_URL}/blog?slug=${slug}`)
  
  
//   return {
//     props: {
//         posts: response.data[0]
//     }
// }

// }


