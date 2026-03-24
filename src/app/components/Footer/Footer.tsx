import { Link } from "react-router-dom"
import { Facebook, Instagram, Mail, ShoppingCart, Twitter } from "lucide-react"
import './footer.css';
import { useState } from "react";
import TermsModal from "../TermsModal/TermsModal";
import PrivacyModal from "../PrivacyModal/PrivacyModal";
function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="w-full bg-color-gray">
      <div className="container flex flex-col">
        <div className="w-full flex justify-between div-wrap padding-t-b">
          <div className="footer-grid-col">
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
        <p className="color-foreground">Your trusted destination for the latest technology products and exceptional service.</p>
        <div className="flex">
          <a href="#">
            <Facebook className="icon social-icon color-foreground"/>
          </a>
          <a href="#">
            <Twitter className="icon social-icon color-foreground"/>
          </a>
          <a href="#">
            <Instagram className="icon social-icon color-foreground"/>
          </a>
          <a href="#">
            <Mail className="icon social-icon color-foreground"/>
          </a>
        </div>
        </div>
        <div className="footer-grid-col">
          <h3>Shop</h3>
          <ul>
            <li>
              <Link to="/products" className="list-link">All Products</Link>
            </li>
            <li>
              <Link to="/products?category=computers" className="list-link">Computers</Link>
            </li>
            <li>
              <Link to="/products?category=smartphones" className="list-link">Smartphones</Link>
            </li>
            <li>
              <Link to="/products?category=accessories" className="list-link">Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="footer-grid-col">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/help" className="list-link">Help Center</Link>
            </li>
            <li>
              <Link to="/shipping" className="list-link">Shipping Info</Link>
            </li>
            <li>
              <Link to="/returns" className="list-link">Returns</Link>
            </li>
            <li>
              <Link to="/contact" className="list-link">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-grid-col">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about" className="list-link">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="list-link">Careers</Link>
            </li>
            <li>
              <button onClick={() => setShowPrivacyModal(true)}>
                Privacy Policy
              </button>
            </li> 
            <li>
              <button onClick={() => setShowTermsModal(true)}>
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
        </div>
        <div className="w-full text-center  padding-t-b" style={{borderTop: "1px solid #d6d3d3"}}>
          <p className="color-foreground">&copy; 2026 TechStore. All rights reserved.</p>
        </div>
      
      </div>

      {/* Modals */}
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
      <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
    </footer>
  )
}

export default Footer