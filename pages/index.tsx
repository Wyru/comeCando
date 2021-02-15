import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Button, Center, Image, Text,
  Grid, GridItem, Link,
} from '@chakra-ui/react';
import {
  getSession, signIn, useSession,
} from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';

import LoadingScreen from '../components/LoadingScreen';

const contentPadding = 20;

const Home = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (session) {
        console.log('logado');
        router.push('/app');
      } else {
        console.log('deslogado!');
      }
    }
  }, [loading, session]);

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      minWidth: '100vw',
    }}
    >
      <Head>
        <title>comeCando</title>
      </Head>
      {
        loading && <LoadingScreen />
      }
      <div style={{
        backgroundImage: "url('/images/loginBackground.jpg')",
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        filter: 'blur(10px)',
      }}
      />
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 1,
      }}
      >
        {!loading && !session && (
          <>
            <Grid
              style={{
                padding: `${contentPadding}px`,
              }}
              h={`calc(100vh - ${contentPadding * 2}px)`}
              w={`calc(100vw - ${contentPadding * 2}px)`}
              templateRows="repeat(3, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1}>
                <Image
                  src="./images/Logo.svg"
                  height="10vh"
                />

              </GridItem>
              <GridItem rowSpan={1}>
                <Image
                  src="./images/title.svg"
                  height="20vh"
                />
                <Text color="white" marginTop="15px">
                  Saiba mais sobre o projeto clicando
                  {' '}
                  <Link href="/sobre" color="#80FFDB">
                    aqui!
                  </Link>
                </Text>
              </GridItem>
              <GridItem rowSpan={1}>
                <Center h="100%">
                  <Button
                    colorScheme="purple"
                    variant="solid"
                    leftIcon={<FaGithub />}
                    onClick={() => signIn('github')}
                  >
                    Login com Github
                  </Button>
                </Center>
              </GridItem>
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

const teste = 'será?';

Home.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/dashboard',
    });
    res.end();
    return {};
  }

  return {
    session: undefined,
  };
};

export default Home;
