import { Button, Flex , Heading, Input} from "@chakra-ui/react";

function UserLogin({background}:any){
    return (
        <>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background={background} p={12} rounded={6}>
                    <Heading mb={6} textAlign="center">Sign-In</Heading>
                    <Input placeholder="E-mail" variant="filled" mb={3} type="email"/>
                    <Input placeholder="password" variant="filled" type="password" mb={7}/>
                    <Button colorScheme="facebook">Log-in</Button>
                </Flex>

            </Flex>
        </>
    )
}

export default UserLogin;