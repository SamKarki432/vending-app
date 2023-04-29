import React from 'react';
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
            <Box
              bg={useColorModeValue('gray.300', 'gray.900')}
              px={4}
              py={1}
              as="header"
              borderBottom="3px solid #e2e8f0"
              textAlign="center" // add text alignment to center
            >
              <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box></Box>
                
                <Box>
                  <Heading>Dashboard</Heading>
                </Box>

                <Flex alignItems={'center'}>
                  <Stack direction={'row'} spacing={2}>
                    <Button onClick={toggleColorMode}>
                      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Button onClick={logOut} colorScheme={'red'}>
                      Log Out
                    </Button>
                  </Stack>
                </Flex>
              </Flex>
            </Box>

    </>
  );
}