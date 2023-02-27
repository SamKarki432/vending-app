import { Button, Flex, Heading } from "@chakra-ui/react";
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo,} from "firebase/auth";
import {auth as GAuth} from "../firebase/firebaseconfig"
import GoogleButton from 'react-google-button'
import { useRouter } from "next/router";
import {readData,writeUserData} from "../firebase/dboperations"

function GoogleLogin({background}:any){
    const auth= GAuth;
    const provider = new GoogleAuthProvider();
    const router= useRouter()
    const handlelogin=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            user?.getIdTokenResult(true).then(function (idTokenResult) {
                readData("users/"+ user.uid).then(data => {
                   
                  if (!data || getAdditionalUserInfo(result)?.isNewUser) {
                    console.log('new user')
                    writeUserData(user?.uid,{
                        userid: user?.uid,
                        user_name : user?.displayName,
                        user_email : user?.email,
                        account_created_date : (user?.metadata.creationTime)?.toLocaleString(),
                        phoneNumber:"not provided",
                        balance: 0,
                        transactions:[]
                    })
                  }
                  else {
                   console.log('old user')
                  }
                }).catch(error => console.log(error))
                
                router.push("/")
              });
         }).catch((error) => {
            //console.log("login vayena")
        });
    }

    return(
        <>
                     {/* <Heading mb={6} textAlign="center">Google
                     </Heading> */}
                     <GoogleButton type="dark" onClick={handlelogin } />
            
        </>
    )
}

export default GoogleLogin;