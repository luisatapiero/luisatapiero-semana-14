// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdNjiblO1Yv9a8kiCY3mB7nIUo5TpnRc8",
    authDomain: "to-do-list-luisatapiero.firebaseapp.com",
    projectId: "to-do-list-luisatapiero",
    storageBucket: "to-do-list-luisatapiero.appspot.com",
    messagingSenderId: "635925377487",
    appId: "1:635925377487:web:469ff2735aef522963a2ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function getTasks() {

    const allTasks = []

    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        allTasks.push({ ...doc.data(), id: doc.id })
    });

    return allTasks
}

export async function addTask(taskTitle) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            title: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export async function editDocument(title, id, completed) {
    const docRef = doc(db, "tasks", id);
  
    try {
      await updateDoc(docRef, {
        title: title,
        completed: !completed // Cambia el estado de completado al valor opuesto
      });
      console.log("Document updated successfully");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
  
  
  

  export async function deleteDocument(id) {
    const docRef = doc(db, "tasks", id);
  
    try {
      await deleteDoc(docRef);
      console.log("Document deleted successfully");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }
  
  



