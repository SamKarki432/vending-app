import { Button, Stack, useColorMode, useColorModeValue ,Flex, Container} from "@chakra-ui/react";
import { useEffect } from "react";
import GoogleLogin from "../components/googlelogin";
import NavBar from "../components/navbar";
import WithSubnavigation from "../components/navbar";
import BalanaceLoad from "../components/userinfo components/balanceload";
import HistoryTable from "../components/userinfo components/historytable";
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
      <Stack marginLeft={'1rem'} marginRight={'1rem'}>
          <UserInfoCard userinfo={user}/>
          <br/>
          <BalanaceLoad/>
          <br/>
          <HistoryTable userinfo={user} />
      </Stack>
     </>
  )
}

export default DashboardPage;