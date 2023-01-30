import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import UserLogin from "../components/userlogin";
;

const LoginPage=()=>{
  const {toggleColorMode} = useColorMode()
  const buttoncolor= useColorModeValue("blackAlpha","blue")
  const formbackgroundcolor = useColorModeValue("WhiteAlpha 900","gray.700")
  useEffect(()=>{
    console.log("this runs on mount")
  },[])
 
  return (
    <>
    <Button colorScheme={buttoncolor} onClick={toggleColorMode}>Change color mode</Button>
      <UserLogin background={formbackgroundcolor}/>
    </>
  )
}

export default LoginPage;