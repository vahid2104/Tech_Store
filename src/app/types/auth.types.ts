import type {UserType} from "./user.types"
export type AuthContextType = {
  user: UserType | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}