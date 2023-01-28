import { useEffect } from "react";
import { writeUserData } from "../firebase/dboperations";

const DashboardPage=()=>{
  useEffect(()=>{
    console.log("this runs on mount")
    
    let userId = 123;
    let name = "John Doe";
    let email = "johndoe@example.com";
    let imageUrl = "https://example.com/image.jpg";
    writeUserData(userId, name, email, imageUrl);
  },[])
 
  return (
    <>
      <p>this is user dashboard page</p>
      <p> user details are shown here</p>
    </>
  )
}

export default DashboardPage;