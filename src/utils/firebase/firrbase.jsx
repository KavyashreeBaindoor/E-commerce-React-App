import { initializeApp } from "firebase/app";
//for sign in using google
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
//firestore db
import { getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
         apiKey: "AIzaSyDv88Y5Ln1zHqh0ypFePV3Lcq71hncspu8",
         authDomain: "e-commerce-database-14e7a.firebaseapp.com",
         projectId: "e-commerce-database-14e7a",
         storageBucket: "e-commerce-database-14e7a.appspot.com",
         messagingSenderId: "669381346264",
         appId: "1:669381346264:web:b3f3d6679cd960796de8ad"
       };

 const app=initializeApp(firebaseConfig) 

 //auth     
 const provider=new GoogleAuthProvider();
 provider.setCustomParameters({
        prompt:"select_account"
 })

 export const auth=getAuth()

 export const loginwithpopup=()=>signInWithPopup(auth,provider)

 //create db
 
 export const db=getFirestore()
//store data from auth to firestore db
//called in login.js with response obj
 export const createUserDocumentFromAuth=async(userauth)=>{

    const userDocRef=doc(db,"users",userauth.uid)
//     (db,"collection",documentname)
         console.log(userDocRef)
        const user= await getDoc(userDocRef)
        console.log(user.exists(    ))

//user does not exist in db

if(!user.exists()){
const {displayName,email}=userauth;
const createdat=new Date()
try{
await setDoc(userDocRef,{displayName,email,createdat})
}catch(error){
         console.log(`error ocuured ${error.message}`)
}
        }

  //user data exists
  return userDocRef;
        
 }