import { initializeApp } from "firebase/app";
import {getDocs,collection,getFirestore,doc,getDoc,query,where,limit} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDjve2W2DT3bZBFfNywj8qux4gxSmsCRso",
  authDomain: "e-commerce-de-bebidas.firebaseapp.com",
  projectId: "e-commerce-de-bebidas",
  storageBucket: "e-commerce-de-bebidas.appspot.com",
  messagingSenderId: "287837542281",
  appId: "1:287837542281:web:aba1a01f1246013d3ef358"
};


const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

// getDoc(docRef).then(snapshot =>{
    //     console.log({id: snapshot.id, ...snapshot.data()});
    // })
    // console.log(db);
    // console.log(app);
    
   export const getDetailItem= ()=>{
         const docRef=doc(db,"items","productos")
         return getDoc(docRef)
        
};

// getDetailItem().then(snap=>{

// })

export const getItems = ()=>{
    
    const colRef = collection(db,"items");
    const q =query(colRef,where("precio",">",100),limit(1)) 
    
    getDocs(q).then(snapshot=>{
        console.log(snapshot.docs.map(docs=>({
            id:docs.id, ...docs.data(),
        })));
    })
}