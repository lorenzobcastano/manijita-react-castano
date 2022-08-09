import { initializeApp } from 'firebase/app';
import {
collection,
getDocs,
doc,
getDoc,
getFirestore,
query,
where,
addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjve2W2DT3bZBFfNywj8qux4gxSmsCRso",
    authDomain: "e-commerce-de-bebidas.firebaseapp.com",
    projectId: "e-commerce-de-bebidas",
    storageBucket: "e-commerce-de-bebidas.appspot.com",
    messagingSenderId: "287837542281",
    appId: "1:287837542281:web:aba1a01f1246013d3ef358"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/*Metodo para traer un solo documento de Firebase*/

export const getDetailItem = (id) => {
  const docRef = doc(db, 'items', id); //referencia a el document
return getDoc(docRef);
};
/*Metodo para traer todos los doc de una coleccion*/

export const getItems = () => {
    const colRef = collection(db, 'items'); // referencia a la collection
    const q = query(colRef);
    return getDocs(q);
};
console.log(db);
/*Metodo para traer datos filtrados de una coleccion*/

export const getItemsFiltered = (categ) => {
    const colRef = query(collection(db, 'items')) // referencia a la collection
    const q = query(colRef, where("category", "==", categ));
    return getDocs(q);
}; 
console.log();

/*Método para enviar una orden nueva a la colección de "orders"*/

export const sendOrder = (items,total) => {
    const order = {
    buyer: {name: "Lorenzo", phone: "011+248457", email: "caslor@gmail.com"},
    items,
    total
    }
    const ordersCollection = collection(db,"orders")
    addDoc(ordersCollection, order).then(doc => console.log(doc.id));
}


