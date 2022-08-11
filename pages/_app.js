import SolarProvider from '../context/solarContext'
import SEO from '../components/SEO'
import 'bootstrap/scss/bootstrap.scss'
import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return (
    <SolarProvider>
      <SEO />
      <Component {...pageProps} />
    </SolarProvider>
  )
}

export default App