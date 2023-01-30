import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import GoogleLogin from "../components/googlelogin";
import UserLogin from "../components/userlogin";
import { writeUserData } from "../firebase/dboperations";
import useFirebaseAuth from "../firebase/useAuth";

const DashboardPage=()=>{
   const {user, loading, logOut}= useFirebaseAuth();
   
   if(loading){
    return "loading please wait"
   }

  return (
    <>
      this is the main dashboard page
      <Button colorScheme="red" onClick={logOut}>logout</Button>
      {user?.displayName}
    </>
  )
}

export default DashboardPage;