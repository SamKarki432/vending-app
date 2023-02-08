import { Card, CardBody, CardFooter, CardHeader, Heading , Text
,Button, SimpleGrid, Center, Stack, Flex, useColorModeValue,Box} from "@chakra-ui/react";


export default function BalanaceLoad(){
    return(
        <>
        <Center py={6}>
            <Stack direction={['column', 'row']} spacing='50px'>
                <Box>
                <Card align='center'
                 bg={useColorModeValue('white', 'gray.900')}
                  borderRadius="lg"
                  boxShadow={'2xl'}
                    >
                    <CardHeader>
                         <Heading size='md'> Balance </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last montheeeee</Text>
                    </CardBody>
                    <CardFooter>
                         <Button colorScheme='teal'
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
                         }}
                         >
                            View here
                         </Button>
                    </CardFooter>
                 </Card>    
                </Box>
                        

                <Box>
                <Card align='center'
                 bg={useColorModeValue('white', 'gray.900')}
                 borderRadius="lg"
                  boxShadow={'2xl'}
                 >
                    <CardHeader>
                         <Heading size='md'>Load Balance</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text marginRight={'5rem'}>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                         <Button colorScheme='teal'
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
                         }}
                         >
                            View here
                        </Button>
                    </CardFooter>
                 </Card> 
                </Box>
            </Stack>
      </Center>
        </>
    )
}