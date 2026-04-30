import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../services/firebase/firebase.config.js";

export const signupWithEmail = async ({ name, email, password }) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  if (name) {
    await updateProfile(result.user, {
      displayName: name,
    });
  }

  return result.user;
};

export const loginWithEmail = async ({ email, password }) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

export const listenToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const getAuthErrorMessage = (error) => {
  switch (error.code) {
    case "auth/invalid-email":
      return "Please enter a valid email address";

    case "auth/user-not-found":
      return "No account found with this email";

    case "auth/wrong-password":
      return "Incorrect password";

    case "auth/email-already-in-use":
      return "This email is already registered";

    case "auth/weak-password":
      return "Password should be at least 6 characters";

    default:
      return "Something went wrong. Please try again";
  }
};
