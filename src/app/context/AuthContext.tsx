import { createContext, useEffect, useState } from "react";
import type { AuthContextType } from "../types/auth.types";
import type { UserType } from "../types/user.types";
import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { Loading } from "../components/Loading";
import type { Order } from "../types/order.types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const mockOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2026-02-10",
    total: 728,
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD-2024-002",
    date: "2026-02-05",
    total: 399,
    status: "Shipped",
    items: 1,
  },
  {
    id: "ORD-2024-003",
    date: "2026-01-28",
    total: 158,
    status: "Delivered",
    items: 2,
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [orders] = useState<Order[]>(mockOrders);
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/popup-closed-by-user":
            throw new Error("Google sign-in was cancelled.");
          case "auth/popup-blocked":
            throw new Error("Popup was blocked by the browser.");
          default:
            throw new Error("Google sign-in failed. Please try again.");
        }
      }

      throw new Error("Something went wrong. Please try again.");
    }
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
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
          case "auth/user-not-found":
          case "auth/wrong-password":
            throw new Error("Invalid email or password.");
          case "auth/invalid-email":
            throw new Error("Please enter a valid email address.");
          case "auth/too-many-requests":
            throw new Error("Too many attempts. Please try again later.");
          default:
            throw new Error("Login failed. Please try again.");
        }
      }

      throw new Error("Something went wrong. Please try again.");
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });

      setUser({
        id: cred.user.uid,
        name,
        email,
      });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            throw new Error("An account with this email already exists.");
          case "auth/invalid-email":
            throw new Error("Please enter a valid email address.");
          case "auth/weak-password":
            throw new Error("Password should be at least 6 characters.");
          default:
            throw new Error("Registration failed. Please try again.");
        }
      }

      throw new Error("Something went wrong. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch {
      throw new Error("Logout failed. Please try again.");
    }
  };

  if (loading) return <Loading />;

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
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
