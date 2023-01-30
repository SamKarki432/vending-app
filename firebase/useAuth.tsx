import {auth as GAuth} from "./firebaseconfig" 
import { useEffect, useState } from "react";
import auth from "firebase/auth";
import {signOut} from "firebase/auth";
import { useRouter } from "next/router";;

function useFirebaseAuth(){
    const [authUser, setauthUser]=useState<auth.User| null>(null)
    const [loading, setloading]= useState(true)

    const auth = GAuth;
    const router=useRouter()

    const handlelogout=()=>{
        signOut(auth).then((res)=>{
            console.log("signed-out")
            router.push("/")
        })
    }

   

    const authStateChangeHandler=(authState:any)=>{
            if (!authState){
                console.log("user is not logged in")
                setauthUser(null)
                setloading(false)
                router.push("/")
            }
            else{
                console.log("currently logged in")
                setauthUser(authState)
                setloading(false)
            }
    }
    // this will run on mount/initialization
    useEffect(()=>{
            const loggingout= auth.onAuthStateChanged(authStateChangeHandler)

            return ()=> loggingout()
    },[])



    return {
        user: authUser,
        loading: loading,
        logOut: handlelogout,
    }
}

export default useFirebaseAuth;