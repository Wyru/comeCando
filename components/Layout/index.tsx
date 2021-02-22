import {
  Grid,
  GridItem,
  IconButton,
  Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { signout, useSession } from 'next-auth/client';
import Head from 'next/head';
import { FaCaretDown, FaSignOutAlt } from 'react-icons/fa';
import AsideMenu from './components/AsideMenu';
import HeaderProfile from './components/HeaderProfile';
import styles from './index.module.css';

interface LayoutProps {
  children?: React.ReactNode,
  title: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}) => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
      >
        <GridItem rowSpan={1} colSpan={1} bg="tomato">
          <HeaderProfile
            name={session.user.name}
            imageURI={session.user.image}
            levelXp={50}
          />
          <div className={styles.dropDownMenu}>
            <Menu >
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaCaretDown />}
                size="xs"
                variant="outline"
              />
              <MenuList >
                <MenuItem icon={<FaSignOutAlt />} onClick={() => signout()}>
                  Sair
              </MenuItem>
              </MenuList>
            </Menu>
          </div>

        </GridItem>
        <GridItem rowSpan={2} colSpan={1} bg="papayawhip">
          <main>
            {children}
          </main></GridItem>
        <GridItem rowSpan={2} colSpan={1} bg="papayawhip">
          {'<Code/>'}
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="papayawhip">
          <aside className={styles.aside}>

            <AsideMenu
              options={[{
                title: 'Aprenda',
                description: 'Descubra como fazer coisas incríveis',
              }]}
              spacing={5}
            />
          </aside >

        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
