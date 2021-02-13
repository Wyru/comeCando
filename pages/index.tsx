import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { Button, Center } from '@chakra-ui/react'


// const Home  = ({ allPostsData }) => {

//   const callLoginWithGithub = () => {
//     const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
//     window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
//   }

//   return (
//     <div>
//       <Head>
//         <title>comeCando</title>
//       </Head>
//       <section>
//         <Center h="100vh" w="100vw">
//           <Button colorScheme="blue" onClick={callLoginWithGithub}>Login com Github</Button>
//         </Center>
//       </section>
//     </div>
//   )
// }

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }


import { signIn, signOut, useSession } from 'next-auth/client'
import { url } from 'inspector'

const Home = () => {
  const [session, loading] = useSession();



  return <>
    <Head>
      <title>comeCando</title>
    </Head>
    <section style={{
      backgroundImage: "url('/images/loginBackground.jpg')",
      backgroundSize: "cover"
    }}>
      {!loading && !session && <>
        <Center h="100vh" w="100vw">
          <Button colorScheme="blue" onClick={() => signIn()}>Login com Github</Button>
        </Center>
      </>}
      {!loading && session && <>
        Signed in as {session.user.email} <br />
        <Center h="100vh" w="100vw">
          <Button colorScheme="red" onClick={() => signOut()}>Sair</Button>
        </Center>
      </>}
    </section>
  </>
}

export default Home;

