import { Button, Flex , Heading, Input,FormLabel,FormControl,Divider,Text,HStack} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import GoogleLogin from "./googlelogin";

function UserLogin({background}:any){
    return (
        <>
            <Flex height="80vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background={background} p={12} rounded={8}>
                    <Heading mb={6} textAlign="center">SIGN-IN</Heading>
                    <FormControl mb={3}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" />
                    </FormControl>
                    <FormControl mb={3}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input id="password" type="password" />
                    </FormControl>
                    <Button colorScheme="teal" mb={5}>Log-in</Button>
                    <HStack mb={5}>
                        <Divider />
                            <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                or sign-in with google
                            </Text>
                        <Divider />
                    </HStack>
                    
                    <GoogleLogin />
                </Flex>
                
            </Flex>
        </>
    )
}

export default UserLogin;