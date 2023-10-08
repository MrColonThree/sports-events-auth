import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  // Fetched the json file for banner section
  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);
  // Fetched the json file for Service/Events section
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // Fetched the json file for blogs/Featured blogs section
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // After register account, user will be created
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // To get the user, when login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // It's used for updating name and profile picture, when register or SignUp 
  const profileUpdate = (currentUser) => {
    setLoading(true);
    return updateProfile(auth, currentUser);
  };
  // It's used for google sign in and get the user data
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // It's used for github sign in and get the user data
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // It's used for logout the user.After sign out the user data will be removed
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // It's used to observe the user, whenever the user is logged in or logged out.
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      observer();
    };
  });

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    profileUpdate,
    googleSignIn,
    githubSignIn,
    logOut,
    slides,
    services,
    blogs,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
