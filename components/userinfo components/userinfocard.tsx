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
import EditProfile from './editprofile';
  
  export default function socialProfileWithImageHorizontal({userinfo,userdatadb}:any) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
      const form = event.currentTarget;
      event.preventDefault();
      const Name = form.elements.namedItem('user_name') as HTMLInputElement;
      const phoneNum = form.elements.namedItem('phone_number') as HTMLInputElement;
      const address = form.elements.namedItem('Address') as HTMLInputElement;
      
    // console.log({
    //   user_name: Name.value,
    //   phoneNumber: phoneNum.value,
    //   address: address.value,
    //  })

     updateUser(userinfo.uid, {
      user_name: Name.value,
      phoneNumber: phoneNum.value,
      address: address.value,
     })
      onClose()
  }
    
    return (
      <Center py={6}>
        <Stack
          // borderWidth="1px"
          // borderRadius="lg"
          w={{ sm: '100%', md: '100%', lg:'75%' }}
          height={{ sm: '500px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          // boxShadow={'2xl'}
          borderRadius="lg"
          boxShadow={'xl'}
          padding={4}>

          <Flex flex={1} 
          justifyContent="center"
          >
            <Image
              borderRadius='full'
              alt='image'
              boxSize={{ sm: '500px', md: '300px' }}
              src={userinfo?.photoURL?String(userinfo?.photoURL) : 'https://avatars.dicebear.com/api/male/username.svg'}
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
              
              {userinfo?.metadata.creationTime}
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
                rounded={'full'}
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