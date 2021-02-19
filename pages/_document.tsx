import Document, {Html, Head, Main, NextScript} from 'next/document';

// used to make sight SEO friendly
export default class CustomDocument extends Document {
    render(){
        return <Html>
            <Head>
                
            </Head>
            <body>
                <Main/>
            </body>
           
            <NextScript/>
        </Html>
    }
}
 

 
