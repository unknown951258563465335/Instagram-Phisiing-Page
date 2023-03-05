import AppContext from "./usecontext";
import { db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const saveData = async (email,password) => {
  const docRef = await addDoc(collection(db, "users"), {
    email: email,
    password: password,
  });
};

const AppState = (props) => {
  const value = {
    saveData
  };
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
