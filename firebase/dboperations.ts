import { Database, getDatabase, ref, set, onValue ,update} from "firebase/database";
import {database} from "./firebaseconfig"


const db = database;
export default db;



export function writeUserData(userId:any, userData:any) {
  set(ref(db, 'users/' + userId), userData);
}

export function readUserdata(userID:any){
  const starCountRef = ref(db, 'users/' + userID );
  
  onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
});

}

export function readData(keyname:any): Promise<any>{

    return new Promise((resolve, reject) => {
      onValue(ref(db, keyname), (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    });
  }
  

  export function updateUser(userID:string, updateValue:any){
  
    update(ref(db,"/users/"+userID),updateValue)
  }
  
