import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import UserLogin from "../components/userlogin";
import useFirebaseAuth from "../firebase/useAuth";
;

const LoginPage=()=>{
  const{user,loading,logOut}=useFirebaseAuth();
  const {toggleColorMode} = useColorMode();
  const buttoncolor= useColorModeValue("blackAlpha","blue");
  const formbackgroundcolor = useColorModeValue("WhiteAlpha 900","gray.700");
  const router= useRouter()

  if(user){
    router.push("/loginpage")
  }
 
  return (
    <>
    <Button colorScheme={buttoncolor} onClick={toggleColorMode}>Change color mode</Button>
      <UserLogin background={formbackgroundcolor}/>
    </>
  )
}

export default LoginPage;