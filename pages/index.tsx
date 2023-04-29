import React from 'react';
import { Box, Stack, useColorModeValue} from "@chakra-ui/react";
import {  useState } from "react";
import { readData} from "../firebase/dboperations";
import VendingFooter from "../components/footer";
import NavBar from "../components/navbar";
import UserInfoCard from "../components/userinfo components/userinfocard";

import useFirebaseAuth from "../firebase/useAuth";
import BarChart from "../components/userinfo components/monthlybarchart";
import ViewAndLoad from "../components/userinfo components/viewandload";
import TransactionHistory from "../components/userinfo components/transactionhistory";

const DashboardPage=()=>{
  type userInfo ={[key:string]:any}
  const [userdata, setUserdata] = useState<userInfo>({});

   const {user, loading, logOut}= useFirebaseAuth();
   //console.log(process.env.NEXT_PUBLIC_API_KEY)
   
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
       <Stack > {/* marginLeft={'2rem'} marginRight={'2rem'} marginBottom={'2rem'} */}
        
          <UserInfoCard userinfo={user} userdatadb={userdata}/>
          <ViewAndLoad userinfo={user} userdatadb={userdata}/>    
          
          <TransactionHistory userid={user} userinfo={userdata}/>
          <BarChart userdatadb={userdata}/>
          
      </Stack>
      <VendingFooter/>
     </>
  )
}

export default DashboardPage;