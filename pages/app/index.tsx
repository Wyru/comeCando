import { useSession } from 'next-auth/client';

import Layout from '../../components/Layout';
import LoadingScreen from '../../components/LoadingScreen';
import AuthenticationCheck from '../../components/AuthenticationCheck';

const App = () => {
  const [, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return <LoadingScreen />;

  return (<AuthenticationCheck >
    <Layout
      title="APP"
    >
      Conteúdo da página APP
    </Layout>
  </AuthenticationCheck>);
};

export default App;
