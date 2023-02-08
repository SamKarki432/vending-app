import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function socialProfileWithImageHorizontal({userinfo}:any) {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%', lg:'75%' }}
          height={{ sm: '500px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} 
          justifyContent="center"
          >
            <Image
              borderRadius='full'
              boxSize={{ sm: '500px', md: '300px' }}
              src={userinfo?.photoURL?String(userinfo?.photoURL) : 'https://avatars.dicebear.com/api/male/username.svg'}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            // p={1}
            // pt={2}
            >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {userinfo?.displayName}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {userinfo?.email}
            </Text>

            <Text
            //   textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              {userinfo?.metadata.creationTime}
            </Text>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
            //   justifyContent={'space-between'}
            //   alignItems={'center'}
            >
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'teal.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Edit profile
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }