import { Stack} from "@chakra-ui/react";
import {  useState } from "react";
import { readData} from "../firebase/dboperations";
import VendingFooter from "../components/footer";
import NavBar from "../components/navbar";
import HistoryTable from "../components/userinfo components/historytable";
import UserInfoCard from "../components/userinfo components/userinfocard";

import useFirebaseAuth from "../firebase/useAuth";
import BarChart from "../components/userinfo components/monthlybarchart";
import ViewAndLoad from "../components/userinfo components/viewandload";

const DashboardPage=()=>{
  type userInfo ={[key:string]:any}
  const [userdata, setUserdata] = useState<userInfo>({});

   const {user, loading, logOut}= useFirebaseAuth();
   
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
        
          <UserInfoCard userinfo={user} userdatadb={userdata}/>
          <ViewAndLoad userdatadb={userdata}/>
          <br/><br/>
          <BarChart/>
          <br/> <br/>
          <HistoryTable userinfo={userdata} />
      </Stack>
    <VendingFooter/>
     </>
  )
}

export default DashboardPage;