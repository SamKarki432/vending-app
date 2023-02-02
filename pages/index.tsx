import { Button, Stack, useColorMode, useColorModeValue ,Flex, Container} from "@chakra-ui/react";
import { useEffect } from "react";
import GoogleLogin from "../components/googlelogin";
import NavBar from "../components/navbar";
import WithSubnavigation from "../components/navbar";
import UserInfoCard from "../components/userinfo components/userinfocard";
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
      {/* <WithSubnavigation/> */}
      <NavBar/>
        
          <UserInfoCard userinfo={user}/>
     </>
  )
}

export default DashboardPage;