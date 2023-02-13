import { Card, CardBody, CardFooter, CardHeader, Heading , Text
,Button, SimpleGrid, Center, Stack, Flex, useColorModeValue,Box} from "@chakra-ui/react";


export default function BalanaceLoad(){
    return(
        <>
            <Stack direction={['column', 'row']} 
            // spacing='50px' 
            align='stretch' 
            justifyContent={'space-around'}>
                <Box>
                <Card align='center'
                 bg={useColorModeValue('white', 'gray.900')}
                  borderRadius="lg"
                  boxShadow={'2xl'}
                  _hover={{ bg: "teal.600" }}
                  _focus={{ boxShadow: "outline" }}
                  maxW='md'
                    >
                    <CardHeader>
                         <Heading size='md'> Balance.eeeeeeeeeeeeeeeeeeeee</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='3xl' > Nrs. 1500 </Text>
                    </CardBody>
                    <CardFooter>
                         <Button colorScheme='#4681f4'
                         flex={1}
                         fontSize={'sm'}
                         rounded={'full'}
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
                </Box>
                        

                <Box>
                <Card align='center'
                 bg={useColorModeValue('white', 'gray.900')}
                 borderRadius="lg"
                  boxShadow={'2xl'}
                 >
                    <CardHeader>
                         <Heading size='md'>Load Balanceeeeeeeeeeee</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='3xl'>Load balance </Text>
                    </CardBody>
                    <CardFooter>
                         <Button colorScheme='#4681f4'
                         flex={1}
                         fontSize={'sm'}
                         rounded={'full'}
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
                </Box>
            </Stack>
        </>
    )
}