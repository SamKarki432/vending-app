import { Card, CardBody, CardFooter, CardHeader, Heading , Text
,Button, SimpleGrid, Center, Stack, Flex, useColorModeValue,Box} from "@chakra-ui/react";


export default function BalanaceLoad({userdatadb}:any){
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
                  maxW='md'
                  sx={{ borderRadius: "20%" }}
                    >
                    <CardHeader>
                         <Heading size='md'> Balance</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='xl' > Nrs.{userdatadb?.balance?userdatadb?.balance:"can't load balance"}</Text>
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
                  sx={{ borderRadius: "20%" }}
                 >
                    <CardHeader>
                         <Heading size='md'>Load Balance</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='xl'>Load balance into your account through khalti</Text>
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
                            Load
                        </Button>
                    </CardFooter>
                 </Card> 
                </Box>
            </Stack>
        </>
    )
}