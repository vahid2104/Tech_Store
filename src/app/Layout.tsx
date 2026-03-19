import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
