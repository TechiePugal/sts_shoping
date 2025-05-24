import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove, update, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuL2L1OeWRRMgj9HXoBX3FbTvOQ4O4w8I",
  authDomain: "logbookapp-ca1a0.firebaseapp.com",
  databaseURL: "https://logbookapp-ca1a0-default-rtdb.firebaseio.com",
  projectId: "logbookapp-ca1a0",
  storageBucket: "logbookapp-ca1a0.appspot.com",
  messagingSenderId: "764363822742",
  appId: "1:764363822742:web:43639cef835aa15ba654b7",
  measurementId: "G-2E27WGJH8Q"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Auth functions
export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

// Database functions
export const addData = (path: string, data: any) => {
  return push(ref(database, path), data);
};

export const updateData = (path: string, id: string, data: any) => {
  return update(ref(database, `${path}/${id}`), data);
};

export const deleteData = (path: string, id: string) => {
  return remove(ref(database, `${path}/${id}`));
};

export const fetchData = (path: string, callback: (data: any) => void) => {
  const dataRef = ref(database, path);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

export const getSingleData = (path: string, id: string) => {
  return get(ref(database, `${path}/${id}`));
};

export { database, ref, auth };