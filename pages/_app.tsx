import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.css';
import { Provider } from 'next-auth/client';

const App = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ChakraProvider><Component {...pageProps} /></ChakraProvider>
  </Provider>
);

export default App;
