import { Button, Flex , Heading, Input,FormLabel,FormControl,Divider,Text,HStack} from "@chakra-ui/react";
import GoogleLogin from "./googlelogin";

function UserLogin({background}:any){
    return (
        <>
            <Flex height="80vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background={background} p={12} rounded={8}
                 borderRadius="lg"
                 //boxShadow={'dark-lg'}
                 boxShadow="rgb(26 32 44 / 24%) 0px 16px 32px 0px, rgb(26 32 44 / 12%) 0px 8px 16px 0px"
                 borderWidth="1px"
                >
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