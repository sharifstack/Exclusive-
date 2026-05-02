import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  EmailAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  updateEmail,
  updatePassword,
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

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  return result.user;
};

export const loginWithEmail = async ({ email, password }) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

export const updateUserProfile = async ({ displayName, photoURL }) => {
  const user = auth.currentUser;
  if (!user) throw new Error("No authenticated user found");

  await updateProfile(user, {
    displayName,
    photoURL,
  });

  return auth.currentUser;
};

export const updateUserEmail = async ({ currentPassword, newEmail }) => {
  const user = auth.currentUser;
  if (!user) throw new Error("No authenticated user found");

  // Email/password user re-auth
  if (user.providerData.some((p) => p.providerId === "password")) {
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    await reauthenticateWithCredential(user, credential);
  }

  // Google user re-auth
  if (user.providerData.some((p) => p.providerId === "google.com")) {
    const provider = new GoogleAuthProvider();
    await reauthenticateWithPopup(user, provider);
  }

  await updateEmail(user, newEmail);
  return auth.currentUser;
};

export const updateUserPassword = async ({ currentPassword, newPassword }) => {
  const user = auth.currentUser;
  if (!user) throw new Error("No authenticated user found");

  // Password users need recent login
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);

  await updatePassword(user, newPassword);
  return auth.currentUser;
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
