import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Input } from "../Input";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button/Button";
import { useCart } from "../../hooks/useCart";
export function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  return (
    <nav className={`w-full bg-color-white ${styles.nav}`}>
      <div className="container flex flex-col items-center justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          {/*LOGO*/}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`flex items-center justify-between link ${styles.logoLink} `}
            >
              <div className={`${styles.logoIcon}`}>
                <ShoppingCart className="icon icon-white" />
              </div>
              <span className={`${styles.logoText}`}>TechStore</span>
            </Link>
          </div>
          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className={`${styles.form}`}>
            <div className={`flex ${styles.desktopSearch}`}>
              <Search className={`icon ${styles.searchIcon}`} />
              <Input
                type="text"
                placeholder="Search products..."
                className={`bg-color-gray ${styles.input}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          {/* Right Side Icons */}
          <div className="flex items-center justify-between">
            {/* Cart */}
            <Link to="/cart" className={`${styles.positionRelative}`}>
              <ShoppingCart className={`icon ${styles.shoppingCartIcon}`} />
              {cartCount > 0 && (
                <span className={`${styles.cartCountSpan}`}>{cartCount}</span>
              )}
            </Link>
            {/* User Menu */}
            {isAuthenticated ? (
              <div className={`flex ${styles.userMenuLink}`}>
                <Link to="/account" className={`flex items-center margin-x`}>
                  <div
                    className={`flex items-center justify-center bg-color-blue text-bold color-white ${styles.userMenu}`}
                  >
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="margin-x flex items-center text-sm text-bold color-black">
                    {user?.name}
                  </span>
                </Link>
                <Button onClick={logout}>Logout</Button>
              </div>
            ) : (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/login"
                className={`link border-radius bg-color-blue padding-md ${styles.buttonHover} ${styles.userMenuLink}`}
              >
                Sign In
              </Link>
            )}

            {/*Mobile Menu Button*/}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${styles.menuButton} margin-l border-none bg-color-white`}
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
            className={`w-full flex flex-col justify-between margin-t padding-t-b ${styles.mobileMenu}`}
          >
            <form>
              <div className={`w-full flex ${styles.positionRelative}`}>
                <Search className={`icon ${styles.searchIcon}`} />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className={`bg-color-gray ${styles.input}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            <div className="w-full flex">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/products"
                className={`link w-full border-radius bg-color-white padding-md ${styles.allPButton}`}
              >
                All Products
              </Link>
            </div>
            <div className="w-full flex">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/account"
                className={`link w-full border-radius bg-color-white padding-md ${styles.allPButton}`}
              >
                My Account
              </Link>
            </div>
            <div className="w-full flex">
              {isAuthenticated ? (
                <Button className="w-full" onClick={logout}>
                  Logout
                </Button>
              ) : (
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/login"
                  className={`link border-radius bg-color-blue padding-md ${styles.buttonHover}`}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
