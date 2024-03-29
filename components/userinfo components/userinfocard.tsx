import React from 'react';
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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Input,FormLabel,FormControl
  } from '@chakra-ui/react';
import { updateUser } from '../../firebase/dboperations';
  
  export default function UserInfoCard({userinfo,userdatadb}:any) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
      const form = event.currentTarget;
      event.preventDefault();
      const Name = form.elements.namedItem('user_name') as HTMLInputElement;
      const phoneNum = form.elements.namedItem('phone_number') as HTMLInputElement;
      const address = form.elements.namedItem('Address') as HTMLInputElement;
      
     updateUser(userinfo.uid, {
      user_name: Name.value,
      phoneNumber: phoneNum.value,
      address: address.value,
     })
      onClose()
  }
    
    return (
      <Center py={1}>
        <Stack
          maxW="100%"
          borderRadius="lg"
         w={{ base: '90%', sm: '80%', md: '90%', lg: '70%' }}
          direction={{ base: 'column', md: 'row' }}
          sx={{ borderRadius: "5%" }}
          border="2px solid #e2e8f0"
         bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'xl'}
          //boxShadow="rgb(26 32 44 / 24%) 0px 16px 32px 0px, rgb(26 32 44 / 12%) 0px 8px 16px 0px"
          padding={4}
          >

          <Flex flex={1} 
          justifyContent="center"
          >
           <Image
              borderRadius='full'
              borderWidth="10px"
              alt='image'
              boxSize={{ sm: '500px', md: '200px', lg: '225px' }} 
             src={userinfo?.photoURL?String(userinfo?.photoURL) : 'https://avatars.dicebear.com/api/male/username.svg'}
             //src={'https://api.dicebear.com/6.x/personas/svg?seed=Simba&hair=short01'}
            />

          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
            >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
            {userinfo?.displayName}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {userinfo?.email}
            </Text>

            <Text
            //   textAlign={'center'}
              // color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              {userdatadb?.address?userdatadb?.address:"No address provided. Enter your address"}
            </Text>

            <Text px={3}>
              
            {userdatadb?.phoneNumber?userdatadb?.phoneNumber:"No Phone Number provided. Enter your phone number"}
            </Text>
  
            <Stack
              mt={'2rem'}
              direction={'row'}
              padding={2}
            //   justifyContent={'space-between'}
            //   alignItems={'center'}
            >
              <Button
                flex={1}
                fontSize={'sm'}
                //rounded={'full'}
                onClick={onOpen}
                bg={'#4681f4'}
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
              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Profile</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                      <form onSubmit={handleSubmit}>
                            <FormControl mb={3}>
                                    <FormLabel htmlFor="user name">User Name</FormLabel>
                                    <Input id="user_name" type="text" border={'solid'} 
                                    defaultValue={userdatadb?.user_name?userdatadb?.user_name:"USER"}
                                    />
                            </FormControl>

                            <FormControl mb={3}>
                                    <FormLabel htmlFor="phone number">Phone Number</FormLabel>
                                    <Input id="phone_number" type="tel" border={'solid'}
                                    defaultValue={userdatadb?.phoneNumber?userdatadb?.phoneNumber:"enter phone number"}                                    
                                    />
                            </FormControl>

                            <FormControl mb={3}>
                                    <FormLabel htmlFor="Address">Address</FormLabel>
                                    <Input id="Address" type="text" border={'solid'} 
                                     defaultValue={userdatadb?.address? userdatadb?.address:"enter your address"}
                                    />
                            </FormControl>

                            <ModalFooter>      
                                  <Button colorScheme='red' mr={3} onClick={onClose}>
                                          Close
                                  </Button>
                                  <Button variant='ghost'  type='submit'>Edit</Button>
                           </ModalFooter>                    
                       </form>
                      </ModalBody>
                    </ModalContent>
             </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }