import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyD6eIRp9RPqJrXxG4BW-H1qSrgEv_KfZmw",
      authDomain: "super-gaming-007.firebaseapp.com",
      projectId: "super-gaming-007",
      storageBucket: "super-gaming-007.appspot.com",
      messagingSenderId: "864579287986",
      appId: "1:864579287986:web:76009800ea09bc7db702ab"
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
      const queryCategory = query(
            collectionRef,
            where("categoria", "==", categoriaParams)
      )
      const respuesta = await getDocs(queryCategory);

      let dataDocs = respuesta.docs.map((documento) => {
            let docFormateado = { ...documento.data(), id: documento.id }
            return docFormateado;
      });
      return dataDocs;
}

export default firestore;
