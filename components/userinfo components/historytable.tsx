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
    Stack
  } from '@chakra-ui/react'

export default function HistoryTable({userinfo}:any){
    return(
        <>
                <Center>
                <TableContainer  w={{ sm: '100%', md: '90%', lg:'90%' }}>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>{userinfo?.displayName?String(userinfo?.displayName):'Falano'} Purchase history</TableCaption>
                    <Thead>
                         <Tr>
                            <Th>Date</Th>
                            <Th>Vending Machine location</Th>
                            <Th >Purchase items</Th>
                            <Th>Total price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>insert date</Td>
                            <Td>Dhobighat</Td>
                            <Td>milk,water</Td>
                            <Td isNumeric>400</Td>
                        </Tr>

                        <Tr>
                            <Td>insert date</Td>
                            <Td>Kalimati</Td>
                            <Td>Chocolate</Td>
                            <Td isNumeric>100</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </Center>
        </>
    )
}