import { Button } from "@chakra-ui/react";
import { writeUserData } from "../firebase/dboperations";
import useFirebaseAuth from "../firebase/useAuth";


export default function Testdata(){
    const {user,loading,logOut}=useFirebaseAuth()

    if(loading){
        return "loading please wait"
       }

    const dummy_data={
        userid: user?.uid,
        user_name : user?.displayName,
        user_email : user?.email,
        account_created_date : (user?.metadata.creationTime)?.toLocaleString(),
        phoneNumber: 9860309699,
        balance: 1500,
        transactions:[
            {
                vending_location:"KEC kalimati",
                transaction_id: user?.uid+ "KEC kalimati"+"1",
                items_purchased:["milk","water"],
                price: 200,
                transaction_date: (new Date()).toLocaleString()
            },
            {
                vending_location:"KEC kalimati",
                transaction_id: user?.uid+ "KEC kalimati"+"2",
                items_purchased:["milk"],
                price: 100,
                transaction_date: (new Date()).toLocaleString()
            }
        ]
    }

    function handleclick(){
        console.log(dummy_data)
        writeUserData(dummy_data.userid,dummy_data)
    }
    return(
        <>
            this is test page
            <Button onClick={handleclick}> enter dummy data</Button>
        </>
    )
}