import { Card, Center, Stack ,CardFooter,useColorModeValue,CardHeader,Heading,CardBody,Text,Button, Box 
} from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios';


export default function ViewAndLoad({userdatadb}:any){
    const [loading, setLoading] = useState(false);
    const axios = require('axios');

    const khaltiUrl = 'https://khalti.com/api/v2/';
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const khaltiSecretKey = 'test_secret_key_c980292dbc56487ba76b880e74c221ec'; // Use your test secret key here
    //console.log(`Key ${khaltiSecretKey}`)
    const handleLoadBalance = () => {
        setLoading(true);
        const payload = {
                return_url: 'http://localhost:3000/',
                website_url: 'http://localhost:3000/',
                amount: 1300,
                purchase_order_id: 'test12',
                purchase_order_name: 'test',
                customer_info: {
                    name: 'Ashim Upadhaya',
                    email: 'example@gmail.com',
                    phone: '9811496763'
                },
                amount_breakdown: [
                    {
                    label: 'Mark Price',
                    amount: 1000
                    },
                    {
                    label: 'VAT',
                    amount: 300
                    }
                ],
                product_details: [
                    {
                    identity: '1234567890',
                    name: 'Khalti logo',
                    total_price: 1300,
                    quantity: 1,
                    unit_price: 1300
                    }
                ]
                };

                axios.post(corsProxy+ khaltiUrl + 'epayment/initiate/', payload, {
                headers: {
                    Authorization: `Key ${khaltiSecretKey}`
                }
                })
                .then((response:any) => {
                    console.log('Payment request initiated:', response.data);
                    setLoading(false);
                    // Save the pidx from the response for future references
                })
                .catch((error:any) => {
                    console.error('Error initiating payment request:', error.response.data);
                    setLoading(false);
                });
        
      };

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
                    <Text fontSize='xl'>Load balance into your account</Text>
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
                        onClick={handleLoadBalance}
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