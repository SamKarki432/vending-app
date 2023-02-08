import { Card, CardBody, CardFooter, CardHeader, Heading , Text
,Button, SimpleGrid, Center, Stack, Flex, useColorModeValue,Box} from "@chakra-ui/react";


export default function BalanaceLoad(){
    return(
        <>
        <Center py={6}>
        {/* <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '75%' }}
          height={{ sm: '500px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}> */}
            <Stack direction={['column', 'row']} spacing='50px'>
                <Box>
                <Card align='center'
                 bg={useColorModeValue('white', 'gray.900')}>
                    <CardHeader>
                         <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last montheeeee</Text>
                    </CardBody>
                    <CardFooter>
                         <Button colorScheme='teal'>View here</Button>
                    </CardFooter>
                 </Card>    
                </Box>
                        

                <Box>
                <Card align='center'
                 bg={useColorModeValue('white', 'gray.900')}>
                    <CardHeader>
                         <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text marginRight={'5rem'}>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                         <Button colorScheme='teal'>View here</Button>
                    </CardFooter>
                 </Card> 
                </Box>
            </Stack>
        {/* </Stack> */}
      </Center>
        </>
    )
}