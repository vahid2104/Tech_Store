import { createContext, useEffect, useState } from "react";
import type { AuthContextType } from "../types/auth.types";
import type { UserType } from "../types/user.types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName ?? "",
          email: firebaseUser.email ?? "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const register = async (name: string, email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });

    // manual update for instant UI reflect
  setUser({
    id: cred.user.uid,
    name,
    email,
  });
  };
  const logout = async () => {
    await signOut(auth);
  };
if (loading) return <div>Loading...</div>;
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loginWithGoogle,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
