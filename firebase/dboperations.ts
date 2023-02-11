import { Database, getDatabase, ref, set, onValue } from "firebase/database";
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
  /**
   * Reads data from the specified node in the database and returns a promise with the data.
   *
   * @param {string} keyname - The node in the database where the data will be read from.
   * @returns {Promise<any>} - A promise that resolves with the data read from the node.
   * 
   * e.g: Read data from the users node
   * 
   * readData("users").then((data) => {
   * console.log(data);
   * } 
   * 
   */
    return new Promise((resolve, reject) => {
      onValue(ref(db, keyname), (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    });
  }
  




