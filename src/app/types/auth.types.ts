import type { Order } from "./order.types";
import type {UserType} from "./user.types"
export type AuthContextType = {
  user: UserType | null;
  orders: Order[];
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loginWithGoogle: () => Promise<void>;
};