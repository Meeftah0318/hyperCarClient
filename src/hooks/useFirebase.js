import { useEffect, useState } from "react";
import initAuthentication from "../Components/Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (location, history) => {
    signInWithPopup(auth, googleProvider).then(result => {
      setUser(result.user);
      savedUser(user.email, user.displayName);
      addUserDB(user.email, user.displayName);

      // ?redirect
      // const destination = location?.state?.from || "/";
      // history.replace(destination);
      // console.log(result.user);
    });
  };

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setAuthError("");
      })
      .catch(error => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        }
      })
    // []
  );

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  const savedUser = (email, displayName) => {
    const user = { email, displayName };

    fetch("https://blooming-mesa-69850.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  const addUserDB = (email, displayName) => {
    const user = { email, displayName };

    fetch("https://blooming-mesa-69850.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    authError,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut,
  };
};

export default useFirebase;
