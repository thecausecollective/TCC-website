import '../styles/globals.css';
import Navigation from '../components/navigation'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'



// all page props get sent to this its like app.js in react.
// endpoint for updating the pages.
// The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
// destrcutured from props to add the navigation to these props below
function MyApp({ Component, pageProps,navigation }) {

  // console.log(navigation)

  return(
    <>
    {/* sending data to navigation component */}
      <Navigation navigation={navigation} />
      <Component {...pageProps} />
    
  
  </>
  )
 
}

export default MyApp

// can yuse getserverside props here easily, we want navigation data throught out all of the site/
// need to use get initalprops as its does both serverside and clients side
const {publicRuntimeConfig} =getConfig()
MyApp.getInitialProps = async (context)=>{
  // need public runtime copnfig because we nee fto acces APIuRL on clinet side.
  // console.log(context.query)
  // publicruntime config needs the env variable on clinet side and serverside at build time.
  // axios wasnt working for some reason.
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()
  return {navigation}
}

