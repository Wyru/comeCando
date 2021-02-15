import { Center, Image } from '@chakra-ui/react';

const LoadingScreen = () => <>
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 9999,
  }}>
    <Center height="100%">
      <Image
        src="/images/loading.svg"
        width="300"
        height="auto"
      />
    </Center>

  </div>
</>;

export default LoadingScreen;
