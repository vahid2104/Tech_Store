import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, ShoppingCart, Twitter } from "lucide-react";
import styles from "./footer.module.css";
import { useState } from "react";
import TermsModal from "../TermsModal/TermsModal";
import PrivacyModal from "../PrivacyModal/PrivacyModal";
function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className={`w-full bg-color-gray ${styles.footer}`}>
      <div className="container flex flex-col">
        <div
          className={`w-full flex justify-between ${styles.divWrap} padding-t-b`}
        >
          <div className={`${styles.footerGridCol}`}>
            {/*LOGO*/}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className={`flex items-center justify-between link ${styles.logoLink}`}
              >
                <div className={`${styles.logoIcon}`}>
                  <ShoppingCart className="icon icon-white" />
                </div>
                <span className={`${styles.logoText}`}>TechStore</span>
              </Link>
            </div>
            <p className="color-foreground">
              Your trusted destination for the latest technology products and
              exceptional service.
            </p>
            <div className="flex">
              <a href="#">
                <Facebook
                  className={`icon ${styles.socialIcon} color-foreground`}
                />
              </a>
              <a href="#">
                <Twitter
                  className={`icon ${styles.socialIcon} color-foreground`}
                />
              </a>
              <a href="#">
                <Instagram
                  className={`icon ${styles.socialIcon} color-foreground`}
                />
              </a>
              <a href="#">
                <Mail
                  className={`icon ${styles.socialIcon} color-foreground`}
                />
              </a>
            </div>
          </div>
          <div className={`${styles.footerGridCol}`}>
            <h3 className={`${styles.footerGridColH3}`}>Shop</h3>
            <ul className={`${styles.footerGridColUl}`}>
              <li>
                <Link to="/products" className={`${styles.listLink}`}>
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=computers"
                  className={`${styles.listLink}`}
                >
                  Computers
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=smartphones"
                  className={`${styles.listLink}`}
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=accessories"
                  className={`${styles.listLink}`}
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.footerGridCol}`}>
            <h3 className={`${styles.footerGridColH3}`}>Support</h3>
            <ul className={`${styles.footerGridColUl}`}>
              <li>
                <Link to="/help" className={`${styles.listLink}`}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping" className={`${styles.listLink}`}>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className={`${styles.listLink}`}>
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`${styles.listLink}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.footerGridCol}`}>
            <h3 className={`${styles.footerGridColH3}`}>Company</h3>
            <ul className={`${styles.footerGridColUl}`}>
              <li>
                <Link to="/about" className={`${styles.listLink}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className={`${styles.listLink}`}>
                  Careers
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className={`${styles.modalsBtn}`}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowTermsModal(true)}
                  className={`${styles.modalsBtn}`}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={`w-full text-center  padding-t-b ${styles.footerText}`}>
          <p className="color-foreground">
            &copy; 2026 TechStore. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modals */}
      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />
      <PrivacyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
    </footer>
  );
}

export default Footer;
