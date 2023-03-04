import { Card, Center, Stack ,CardFooter,useColorModeValue,CardHeader,Heading,CardBody,Text,Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Input,FormLabel,FormControl
} from "@chakra-ui/react";
import checkout from "./checkout";
import { updateUser } from '../../firebase/dboperations';
import {  useState , useEffect} from "react";
import { useRouter } from 'next/router'


export default function ViewAndLoad({userinfo,userdatadb}:any){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newbal, setNewbal] = useState<number>(userdatadb?.balance);
    const [updatebalance, setUpdatebalance]=useState(false);
   //console.log(typeof userdatadb.balance)
   

    const router = useRouter();
    const { session_id } = router.query;

  
    
    // useEffect(() => {
    //     const session_id = router.query.session_id;
        

    //     if (session_id) {
          
    //         // update database with payment details
    //         // console.log(newbal)
    //         updateUser(userinfo.uid, {
    //               balance: newbal
    //          })
          
    //     }
    //   }, [router.query.session_id]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        const form = event.currentTarget;
        event.preventDefault();
        const balance_load = form.elements.namedItem('load balance') as HTMLInputElement;
        const new_balance = parseInt(userdatadb?.balance) + parseInt(balance_load.value);
        // setNewbal(new_balance);
        // console.log(String(new_balance))
        // console.log(newbal)
       checkout(
                {
                    lineItems: [
                      {
                        price: "price_1Mg3vvSEwtNH34dAwu5pjEVP",
                        quantity: parseInt(balance_load.value)
                      }
                    ]
                  }
            )
      
        
            updateUser(userinfo.uid, {
                balance: new_balance
                })
    }

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
                    bg={useColorModeValue('white', 'gray.900')}
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
                    <Text fontSize='xl'> Nrs.{userdatadb?.balance?userdatadb?.balance:"0"}</Text>
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
                    bg={useColorModeValue('white', 'gray.900')}
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
                        onClick={onOpen}
                        // onClick={()=>{
                        //     checkout(
                        //         {
                        //             lineItems: [
                        //               {
                        //                 price: "price_1MfhFYSEwtNH34dAD4rgLDAC",
                        //                 quantity: 1
                        //               }
                        //             ]
                        //           }
                        //     )
                        // }}

                    >
                        Load
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>LOAD BALANCE</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                      <form onSubmit={handleSubmit}>
                            <FormControl mb={3}>
                                    <FormLabel htmlFor="load balace">Amount to Load</FormLabel>
                                    <Input id="load balance" type='number' border={'solid'} 
                                    defaultValue={100}
                                    onChange={(event) => {
                                        setNewbal(Number(event.target.value));
                                      }}
                                      />
                            </FormControl>

                           

                            <ModalFooter>      
                                  <Button colorScheme='red' mr={3} onClick={onClose}>
                                          Close
                                  </Button>
                                  <Button type='submit'>Load Balance</Button>
                           </ModalFooter>                    
                       </form>
                      </ModalBody>
                    </ModalContent>
             </Modal>
                    </CardFooter>
                </Card> 
                </Stack>

                
            </Center>
        </>
    )
}