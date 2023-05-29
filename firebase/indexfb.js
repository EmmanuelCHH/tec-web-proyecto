import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsXN0apooT0q445CT2WQYyx18bTyOwHig",
    authDomain: "tecweb-9ba93.firebaseapp.com",
    projectId: "tecweb-9ba93",
    storageBucket: "tecweb-9ba93.appspot.com",
    messagingSenderId: "12545972501",
    appId: "1:12545972501:web:b71d358766c6d26059711c",
    measurementId: "G-0E91KJBG5G"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const bd = getFirestore(app);
const todosCol = collection(bd, 'todos');
const snapshot = await getDocs(todosCol);

onAuthStateChanged(auth, user =>{
    if(user != null){
        console.log('logged');
    }else{
        console.log('no user');
    }
});

export default firebaseConfig