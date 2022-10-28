import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
      const collectionRef = collection(firestore, "superGaming");
      let respuesta = await getDocs(collectionRef);

      let dataDocs = respuesta.docs.map((documento) => {
            let docFormateado = { ...documento.data(), id: documento.id }
            return docFormateado;
      })
      return dataDocs;
}

export async function getSingleItems(idParams) {
      try {
            const docRef = doc(firestore, "superGaming", idParams);
            const docSnapshot = await getDoc(docRef);
            return { ...docSnapshot.data(), id: docSnapshot.id }
      } catch (error) {
            console.error(error);
      }
}

export async function getItemsCategoria(categoriaParams) {
      const collectionRef = collection(firestore, "superGaming");
      const queryCategory = query(collectionRef, where("categoria", "==", categoriaParams))
      const respuesta = await getDocs(queryCategory);

      let dataDocs = respuesta.docs.map((documento) => {
            let docFormateado = { ...documento.data(), id: documento.id }
            return docFormateado;
      });
      return dataDocs;
}

export async function getItemsPlataforma(plataformaParams) {
      const collectionRef = collection(firestore, "superGaming");
      const queryPlataform = query(collectionRef, where("plataforma", "==", plataformaParams))
      const respuesta = await getDocs(queryPlataform);

      let dataDocs = respuesta.docs.map((documento) => {
            let docFormateado = { ...documento.data(), id: documento.id }
            return docFormateado;
      });
      return dataDocs;
}

export default firestore;
