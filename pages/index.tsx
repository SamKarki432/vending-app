import { Button, Stack, useColorMode, useColorModeValue ,Flex, Container,Text, Center, Box} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import VendingFooter from "../components/footer";
import NavBar from "../components/navbar";
import BalanaceLoad from "../components/userinfo components/balanceload";
import HistoryTable from "../components/userinfo components/historytable";
import UserInfoCard from "../components/userinfo components/userinfocard";
import { readData, readUserdata, writeUserData } from "../firebase/dboperations";
import useFirebaseAuth from "../firebase/useAuth";

const DashboardPage=()=>{
  const {user, loading, logOut}= useFirebaseAuth();
  const [userdata, setUserdata]=useState()
   
   if(loading){
    return "loading please wait"
   }

    readData("users/"+user?.uid).then((data)=>{
      setUserdata(data)
     }
     )
     
  return (
    <>
      <NavBar/>
      <Stack marginLeft={'2rem'} marginRight={'2rem'} marginBottom={'2rem'}>
        
          <UserInfoCard userinfo={user}/>
          <BalanaceLoad/>
          <br/><br/>
          <Center>
            <Text as={'b'} fontSize='2xl'>Transaction History</Text>
          </Center>
          <br/> <br/>
          <HistoryTable userinfo={user} />
      </Stack>
    <VendingFooter/>
     </>
  )
}

export default DashboardPage;