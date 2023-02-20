import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center,
    Text,
    Stack,
    Heading
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function HistoryTable({userinfo}:any){
    type Transaction = {
        items_purchased: string[];
        price: number;
        transaction_date: string;
        transaction_id: string;
        vending_location: string;
      };
      
//       const [transactions, setTransactions]= useState<Transaction[]>([]);
// useEffect(()=>{
//         setTransactions(userinfo.transactions)
// })
    return(
        <>
       
                <Center>
                <TableContainer  w={{ sm: '100%', md: '100%', lg:'90%' } }
                //  borderWidth="2px"
                 borderRadius="lg"
                 boxShadow={'2xl'}
                //  borderColor={'gray.300'}
                 sx={{ borderRadius: "7%" }}
                >
                    <Table  variant='striped' colorScheme='blue'>
                        <TableCaption>
                                <Text fontSize='xl' >
                                     {userinfo?.user_name?String(userinfo?.user_name):'Falano'} Purchase history
                                </Text>
                        </TableCaption>
                  
                    <Thead>
                         <Tr>
                            <Th>Date</Th>
                            <Th>Vending Machine location</Th>
                            <Th >Purchase items</Th>
                            <Th>Total price</Th>
                        </Tr>
                    </Thead>
                    <Tbody  alignContent={'center'}
                    justifyContent={'center'}>
                    {userinfo && userinfo.transactions ? (
                            userinfo.transactions.map((transaction:Transaction) => (
                                <tr key={transaction.transaction_id}>
                                <td>{(transaction.transaction_date).toLocaleString()}</td>
                                <td>{transaction.vending_location}</td>
                                <td>{transaction.items_purchased.join(",")}</td>
                                <td>{transaction.price}</td>
                                </tr>
                            ))
                            ) : (
                            <tr>
                                <td colSpan={4}>No transactions found</td>
                            </tr>
                            )}
                    </Tbody>
                </Table>
            </TableContainer>
            </Center>
        </>
    )
}