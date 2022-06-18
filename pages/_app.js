import '../styles/globals.css'
import Layout from '../components/Layout'
import Tracker from '../components/Tracker'
import { plausibleProperty } from '../_siteConfig'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen flex-col">
      {plausibleProperty && <Tracker />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
