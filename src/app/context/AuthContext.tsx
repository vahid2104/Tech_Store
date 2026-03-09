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
