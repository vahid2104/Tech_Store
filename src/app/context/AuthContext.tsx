import { createContext, useEffect, useState } from "react";
import type { AuthContextType } from "../types/auth.types";
import type { UserType } from "../types/user.types";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({ email, password });
  };
  const register = async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({ id: "1", name, email, password });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
