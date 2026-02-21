import { createRoot } from "react-dom/client";
import "./index.css";
import "./app/styles/global.css";
import App from "./app/App.tsx";
import { AuthProvider } from "./app/context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(

    <AuthProvider>
      <App />
    </AuthProvider>
  
);
