import { Flex, Icon, Text,Center,Stack,Box, useColorModeValue} from "@chakra-ui/react"
import { FaRegCalendarAlt,FaArrowDown,FaLowVision} from "react-icons/fa"
import {  useState , useEffect} from "react";
import { updateUser } from '../../firebase/dboperations';


export default function TransactionHistory({userid, userinfo}){
    let total_price;
     useEffect(() => {
        if (userinfo && userinfo.transactions) {
            total_price = Object.values(userinfo.transactions)
                .map(transaction => Number(transaction.price))
                .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
            updateUser(userid?.uid, { total_price: total_price });
        }
      }, [userinfo]);

    return(
        <>
        <Center py={1}>
          <Stack
            w={{ base: '90%', sm: '100%', md: '90%', lg: '70%' }}
            height="auto"
            direction={{ base: 'column', md: 'row' }}
            borderRadius="lg"
            boxShadow="rgb(26 32 44 / 24%) 0px 16px 32px 0px, rgb(26 32 44 / 12%) 0px 8px 16px 0px"
            sx={{ borderRadius: "5%" }}
            padding={4}
            bg={useColorModeValue('white', 'gray.900')}
            border="3px solid #e2e8f0"
          >
            <Flex direction="column" w="100%">
                <Flex
                    direction={{ sm: "column", lg: "row" }}
                    justifyContent={{ sm: "center", lg: "space-between" }}
                    alignItems={{ sm: "center" }}
                    w="100%"
                    my={{ md: "12px" }}
                >
              
                    <Text
                    //color={textColor}
                    fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                    fontWeight="bold"
                    >
                    Your Transactions
                    </Text>
                    <Flex alignItems="center">
                    <Icon
                        as={FaRegCalendarAlt}
                        color="gray.400"
                        fontSize="md"
                        me="6px"
                    ></Icon>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                       Jan 2022- April 2023
                    </Text>
                    </Flex>
                </Flex>

                                    {userinfo && userinfo.transactions ? (
                                    Object.values(userinfo.transactions).map((transaction) => (
                                        <Flex key={transaction.transaction_id} align="center" p="3" rounded="md">
                                        <Icon as={FaArrowDown} mr="2" color="red" boxSize={6} />
                                        <Box flex="1">
                                            <Text fontSize="lg" fontWeight="semibold">
                                            {transaction.items_purchased ? transaction.items_purchased : '---'}
                                            </Text>
                                            <Text fontSize="sm">
                                            {transaction.vending_location ? transaction.vending_location : '---'}
                                            </Text>
                                        </Box>
                                        <Text fontSize="md" color="red.500" fontWeight="semibold">
                                            &#8360; {transaction.price}
                                        </Text>
                                        </Flex>
                                    ))
                                    ) : (
                                    <Flex align="center" p="3" rounded="md">
                                        <Icon as={FaLowVision} mr="2" color="red" />
                                        <Box flex="1">
                                        <Text fontSize="lg" fontWeight="semibold">
                                            No transactions to display
                                        </Text>
                                        <Text fontSize="sm">
                                            Purchase items to view your purchase history
                                        </Text>
                                        </Box>
                                    </Flex>
                                    )}

            </Flex>
        </Stack>
        </Center>
        </>
    )

}