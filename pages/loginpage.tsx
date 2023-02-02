import { Button, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import UserLogin from "../components/userlogin";
import useFirebaseAuth from "../firebase/useAuth";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const LoginPage=()=>{
  const {user, loading, logOut}= useFirebaseAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttoncolor= useColorModeValue("blackAlpha","blue")
  const formbackgroundcolor = useColorModeValue("WhiteAlpha 900","WhiteAlpha 900")
  const router= useRouter()
 
 if(user){
  router.push("/")
 }
  return (
    <>
    <Flex h={16} alignItems={'center'} justifyContent={'right'}>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
    

      <UserLogin background={formbackgroundcolor}/>
    </>
  )
}

export default LoginPage;