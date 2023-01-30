import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import GoogleLogin from "../components/googlelogin";
import UserLogin from "../components/userlogin";
import { writeUserData } from "../firebase/dboperations";

const DashboardPage=()=>{
  const {toggleColorMode} = useColorMode()
  const buttoncolor= useColorModeValue("blackAlpha","blue")
  const formbackgroundcolor = useColorModeValue("gray.10","gray.700")
  useEffect(()=>{
    console.log("this runs on mount")
    // let userId = 789;
    // let name = "John Doe";
    // let email = "johndoe@example.com";
    // let imageUrl = "https://example.com/image.jpg";
    // writeUserData(userId, name, email, imageUrl);
  },[])
 
  return (
    <>
    <Button colorScheme={buttoncolor} onClick={toggleColorMode}>Change color mode</Button>
      <UserLogin background={formbackgroundcolor}/>
      <GoogleLogin/>
    </>
  )
}

export default DashboardPage;