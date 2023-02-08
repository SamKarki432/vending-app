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
    Center
  } from '@chakra-ui/react'

export default function HistoryTable({userinfo}:any){
    return(
        <>
                <Center>
                <TableContainer  w={{ sm: '100%', md: '80%', lg:'90%' }}>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>{userinfo?.displayName?String(userinfo?.displayName):'Falano'} Purchase history</TableCaption>
                    <Thead>
                         <Tr>
                            <Th>Name</Th>
                            <Th>Date</Th>
                            <Th >Purchase items</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Samrakshan</Td>
                            <Td>someday</Td>
                            <Td>milk,water</Td>
                        </Tr>

                        <Tr>
                            <Td>hari</Td>
                            <Td>yesterday</Td>
                            <Td>chocolate</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </Center>
        </>
    )
}