import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import useFirebaseAuth from '../firebase/useAuth';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('green.300', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
   const {user, loading, logOut}= useFirebaseAuth()
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.400', 'gray.900')} px={4} as="header">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <Box>
            <Heading >Dashboard</Heading>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={user?.photoURL?String(user?.photoURL) : 'https://avatars.dicebear.com/api/male/username.svg' }
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={user?.photoURL?String(user?.photoURL) : 'https://avatars.dicebear.com/api/male/username.svg' }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user?.displayName}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </MenuList>
              </Menu> */}
              <Button onClick={logOut} colorScheme={'red'}>Log Out</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}