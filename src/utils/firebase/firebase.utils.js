import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} 
    from 'firebase/auth';
import { 
      getFirestore,
      doc,
      getDoc,
      setDoc
     } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyC1qB54s7iyrPbEN8VBI8y1ZSWGnHeBoAE",
    authDomain: "sean-clothing-db.firebaseapp.com",
    projectId: "sean-clothing-db",
    storageBucket: "sean-clothing-db.appspot.com",
    messagingSenderId: "896788109477",
    appId: "1:896788109477:web:8da78b050516928fe7154c"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  
provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup (auth, provider);

  export const db = getFirestore();

  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log('error creating the user', error.message)
      }
    }
    return userDocRef

    // if user datea exoists 

    // 


    // return userDocumentRef
  }