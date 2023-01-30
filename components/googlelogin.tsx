import { Button, Flex, Heading } from "@chakra-ui/react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth as GAuth} from "../firebase/firebaseconfig"
import GoogleButton from 'react-google-button'
import { useRouter } from "next/router";


function GoogleLogin({background}:any){
    const auth= GAuth;
    const provider = new GoogleAuthProvider();
    const router= useRouter()
    const handlelogin=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            router.push("/loginpage")// dashboard
         }).catch((error) => {
            console.log("login vayena")
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