import { Text } from '@chakra-ui/react';
import Head from 'next/head';

const About = () => <div style={{
  backgroundColor: 'black',
  minHeight: '100vh',
  minWidth: '100vw',
}}>
  <Head>
    <title>Sobre</title>
  </Head>
  <div style={{
    backgroundImage: "url('/images/loginBackground.jpg')",
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    filter: 'blur(10px)',
  }} />
  <div style={{
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: 1,
  }}>
    <Text>
      PÁGINA SOBRE
      </Text>
  </div>
</div>;

export default About;
