import { createRoot } from "react-dom/client";
import "./index.css";
import "./app/styles/global.css";
import App from "./app/App.tsx";
import { AuthProvider } from "./app/context/AuthContext.tsx";
import { CartProvider } from "./app/context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CartProvider>,
);
