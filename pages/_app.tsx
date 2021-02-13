import { ChakraProvider } from '@chakra-ui/react'
import '../styles/global.css'
import { Provider } from 'next-auth/client'

const App = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
    </Provider>
  )
}

export default App;
