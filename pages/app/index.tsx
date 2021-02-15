import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import AuthenticationCheck from '../../components/AuthenticationCheck';

const App = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/secret');
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };

    if (session && router) {
      fetchData();
    }
  }, [session, router]);

  if (typeof window !== 'undefined' && loading) return <LoadingScreen />;

  return (<AuthenticationCheck >
    <Head>
      <title>comeÇando</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <main>
      <div>
        <h1> Protected Page</h1>
        <p>{content}</p>
        <Button colorScheme="red" onClick={() => signOut()}>Sair</Button>
      </div>
    </main>
  </AuthenticationCheck>);
};

export default App;
