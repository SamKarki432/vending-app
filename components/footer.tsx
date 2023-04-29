import React from 'react';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Button,
  } from '@chakra-ui/react';
  import { FaTwitter, FaYoutube,FaGithub,FaLinkedin } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function VendingFooter() {
    return (
      <Box
        bg={'gray.300'}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
        <Stack direction={'column'}>
          <Text color={'black'}>2023 Vending Machine Major Project</Text>
          <Text>
            <Text as={'i'} color={'black'}> Created by </Text>
            <Text color={'black'}> Samrakshan Karki 75021</Text>
            <Text color={'black'}> Rajnesh Shrestha 75019</Text> 
          </Text>
        </Stack>
          <Stack direction={{ base: 'row', md: 'column' }} spacing={2}>
            <Button
                colorScheme="gray"
                bg="#fff"
                _hover={{ bg: 'blue.300' }}
                leftIcon={<FaTwitter />}
              >
                Twitter
          </Button>
            
            <Button
                colorScheme="gray"
                bg="#fff"
                _hover={{ bg: 'blue.400' }}
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
          </Button>
            <Button
                colorScheme="gray"
                bg="#fff"
                _hover={{ bg: 'gray.400' }}
                leftIcon={<FaGithub />}
              >
                Github
          </Button>
          </Stack>
          
        </Container>
      </Box>
    );
  }