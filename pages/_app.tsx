import '../styles/globals.css'
import Head from "next/head";
import {AppProps} from "next/dist/shared/lib/router/router";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Scam Detector</title>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp
