import '../styles/globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <script src="https://kit.fontawesome.com/064296735c.js" crossorigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
