import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBTUNTFh0EF18xwTIPflqJ7Yd_Sxxd-EGQ",
  authDomain: "crwn-clothing-3728e.firebaseapp.com",
  projectId: "crwn-clothing-3728e",
  storageBucket: "crwn-clothing-3728e.appspot.com",
  messagingSenderId: "207432535053",
  appId: "1:207432535053:web:7b3f694d20688590ded944"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider= new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});


export const auth=getAuth();
export const signInWithGooglePopUp=()=>signInWithPopup(auth,provider);
export const db=getFirestore();

export const createUserDocumentFromAuth=async(userAuth,additionalInfo)=>{
    //Creating a document
    if(!userAuth) return;
    const userDocRef=doc(db,'users',userAuth.uid)

    console.log(userDocRef)

    const userSnapShot=await getDoc(userDocRef);
    
    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth;
        const createAt= new Date();
        try{
            await setDoc(userDocRef,{
                displayName:displayName,
                email:email,
                createAt,
                ...additionalInfo
            })  
                    
        }catch(err){
           if(err.code === 'auth/email-already-in-use'){
               alert("Email already in use")
           }
           throw err
        }
    }

    return userDocRef;
    
    //if user data doesnt exist

    //return userDoc
}

export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}