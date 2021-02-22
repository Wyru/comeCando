import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { useEffect } from 'react';
import LoadingScreen from '../LoadingScreen';

const AuthenticationCheck = ({ children }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (router && session === null) {
      router.push('/');
    }
  }, [session, router]);

  if (typeof window !== 'undefined' && loading || !session) return null;

  return (<>
    {children}
  </>);
};

export default AuthenticationCheck;
