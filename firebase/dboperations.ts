import { Database, getDatabase, ref, set } from "firebase/database";
import {database} from "./firebaseconfig"


const db = database;
export default db;



export function writeUserData(userId:any, name:any, email:any, imageUrl:any) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}