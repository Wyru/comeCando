import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { Button, Center } from '@chakra-ui/react'

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;

const Home  = ({ allPostsData }) => {

  const callLoginWithGithub = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
  }

  return (
    <div>
      <Head>
        <title>comeCando</title>
      </Head>
      <section>
        <Center h="100vh" w="100vw">
          <Button colorScheme="blue" onClick={callLoginWithGithub}>Login com Github</Button>
        </Center>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home;

