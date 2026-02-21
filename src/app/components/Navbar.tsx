import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Input } from "./Input";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./Button";
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  return (
    <nav className="w-full" style={{ padding: "15px 0" }}>
      <div className="container flex flex-col items-center justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          {/*LOGO*/}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center justify-between link"
              style={{ width: "145px"}}
            >
              <div style={{ backgroundColor: "#2e57dd", borderRadius: "4px" }}>
                <ShoppingCart className="icon icon-white" />
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem",
                  fontWeight: "600",
                  color: "#353535",
                }}
              >
                TechStore
              </span>
            </Link>
          </div>
          {/* Search Bar - Desktop */}
          <form style={{ width: "45%" }}>
            <div
              className="flex desktop-search"
              style={{ width: "100%", position: "relative", margin: "0 10px" }}
            >
              <Search
                className="icon"
                style={{
                  color: "#888",
                  position: "absolute",
                  left: "5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <Input
                type="text"
                placeholder="Search products..."
                className=" bg-color-gray"
              />
            </div>
          </form>
          {/* Right Side Icons */}
          <div className="flex items-center justify-between">
            {/* Cart */}
            <Link to="/cart">
              <ShoppingCart
                className="icon margin-r"
                style={{ marginTop: "5px" }}
              />
            </Link>
            {/* User Menu */}
            {isAuthenticated ? (
              <Link
                to="/account"
                className="user-menu flex items-center margin-x"
              >
                <div
                  className="flex items-center justify-center bg-color-blue text-bold color-white"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="margin-x flex items-center text-sm text-bold color-black">
                  {user?.name}
                </span>
                <Button onClick={logout}>Logout</Button>
              </Link>
            ) : (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/login"
                className="link border-radius bg-color-blue padding-md button-hover"
              >
                Sign In
              </Link>
            )}

            {/*Mobile Menu Button*/}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="menu-button margin-l border-none bg-color-white"
            >
              {mobileMenuOpen ? (
                <X className="icon" />
              ) : (
                <Menu className="icon" />
              )}
            </button>
          </div>
        </div>

        {/*Mobile Menu*/}
        {mobileMenuOpen && (
          <div
            className=" w-full mobile-menu flex flex-col justify-between margin-t padding-t-b"
            style={{ borderTop: "1px solid #d6d3d3" }}
          >
            <form>
              <div
                className="flex w-full"
                style={{ position: "relative" }}
              >
                <Search
                  className="icon"
                  style={{
                    color: "#888",
                    position: "absolute",
                    left: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className=" bg-color-gray"
                />
              </div>
            </form>
            <div className="w-full flex">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/products"
                className="link w-full border-radius bg-color-white padding-md all-p-button"
              >
                All Products
              </Link>
            </div>
            <div className="w-full flex">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/account"
                className="link w-full border-radius bg-color-white padding-md all-p-button"
              >
                My Account
              </Link>
            </div>
            <div className="w-full flex">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/login"
                className="link w-full text-center border-radius bg-color-blue padding-md button-hover"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
