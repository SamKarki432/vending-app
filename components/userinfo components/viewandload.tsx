import { Card, Center, Stack ,CardFooter,useColorModeValue,CardHeader,Heading,CardBody,Text,Button, Box 
} from "@chakra-ui/react";


export default function ViewAndLoad({userdatadb}:any){

    return(
        <>
            <Center py={6}>
            <Stack         
                borderRadius="lg"
                w={{ sm: '100%', md: '90%', lg:'70%' }}
                direction={{ base: 'column', md: 'row' }}
                sx={{ borderRadius: "5%" }}
                // bg={useColorModeValue('white', 'gray.900')}
                // boxShadow={'2xl'}
                // boxShadow={'xl'}
                //padding={4}
                justifyContent={'space-between'}
            >
                <Card align='center'
                    bg={useColorModeValue('white', 'gray.800')}
                    borderRadius="lg"
                    // borderWidth="2px"
                    // borderColor={'gray.300'}
                    boxShadow="rgb(26 32 44 / 24%) 0px 16px 32px 0px, rgb(26 32 44 / 12%) 0px 8px 16px 0px"
                    maxW='md'
                    sx={{ borderRadius: "5%" }}
                    w='full'
                    minH='200px' // set the minimum height for the card
                >
                    <CardHeader>
                    <Heading size='md'>Balance</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text fontSize='xl'> Nrs.{userdatadb?.balance?userdatadb?.balance:"can't load balance"}</Text>
                    </CardBody>
                    <CardFooter>
                    <Button colorScheme='#4681f4'
                        flex={1}
                        fontSize={'sm'}
                        //rounded={'full'}
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
                        }}
                    >
                        View here
                    </Button>
                    </CardFooter>
                </Card>    

                <Card align='center'
                    bg={useColorModeValue('white', 'gray.800')}
                    borderRadius="lg"
                    //  borderWidth="2px"
                    //  borderColor={'gray.300'}
                    boxShadow="rgb(26 32 44 / 24%) 0px 16px 32px 0px, rgb(26 32 44 / 12%) 0px 8px 16px 0px"
                    sx={{ borderRadius: "5%" }}
                    w='full'
                    minH='200px' // set the minimum height for the card
                >
                    <CardHeader>
                    <Heading size='md'>Load Balance</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text fontSize='xl'>Load balance into your account through Khalti</Text>
                    </CardBody>
                    <CardFooter>
                    <Button colorScheme='#4681f4'
                        flex={1}
                        fontSize={'sm'}
                        //rounded={'full'}
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
                        }}
                    >
                        Load
                    </Button>
                    </CardFooter>
                </Card> 
                </Stack>

                
            </Center>
        </>
    )
}