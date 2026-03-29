import {
  Search,
  ShoppingBag,
  Truck,
  RotateCcw,
  CreditCard,
  Shield,
  Headphones,
} from "lucide-react";
import styles from "./helpCenter.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: ShoppingBag,
      title: "Orders & Purchases",
      description:
        "Learn about placing orders, payment methods, and order tracking",
      articles: [
        { title: "How to place an order", link: "#" },
        { title: "Payment methods accepted", link: "#" },
        { title: "Order tracking and updates", link: "#" },
        { title: "Canceling or modifying orders", link: "#" },
      ],
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description:
        "Information about shipping options, delivery times, and tracking",
      articles: [
        { title: "Shipping options and costs", link: "/shipping" },
        { title: "Delivery timeframes", link: "/shipping" },
        { title: "International shipping", link: "/shipping" },
        { title: "Package tracking", link: "/shipping" },
      ],
    },
    {
      icon: RotateCcw,
      title: "Returns & Refunds",
      description:
        "Our return policy, refund process, and exchange information",
      articles: [
        { title: "Return policy overview", link: "/returns" },
        { title: "How to return an item", link: "/returns" },
        { title: "Refund processing time", link: "/returns" },
        { title: "Exchanges and replacements", link: "/returns" },
      ],
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment security, billing questions, and payment methods",
      articles: [
        { title: "Accepted payment methods", link: "#" },
        { title: "Payment security", link: "#" },
        { title: "Billing issues", link: "#" },
        { title: "Invoice and receipts", link: "#" },
      ],
    },
    {
      icon: Shield,
      title: "Account & Security",
      description: "Manage your account, privacy, and security settings",
      articles: [
        { title: "Creating an account", link: "#" },
        { title: "Password reset", link: "#" },
        { title: "Privacy settings", link: "#" },
        { title: "Account security", link: "#" },
      ],
    },
    {
      icon: Headphones,
      title: "Product Support",
      description: "Product information, warranties, and technical support",
      articles: [
        { title: "Product warranties", link: "#" },
        { title: "Technical specifications", link: "#" },
        { title: "Product manuals", link: "#" },
        { title: "Troubleshooting guides", link: "#" },
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={`w-full gradient-header ${styles.heroSection}`}>
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl margin-block-none">How Can We Help?</h1>
          <p className="text-lg color-foreground">
            Search our help center or browse by category below
          </p>

          {/* Search Bar */}
          <div className={`w-full margin-t ${styles.searchDiv}`}>
            <div className={`${styles.searchInputDiv}`}>
              <Search className={`${styles.searchIcon}`} />
              <input
                className={`${styles.searchInput}`}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.containerBox}`}>
        {/* Help  Categories */}
        <div className="flex flex-wrap justify-between">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${styles.helpBox} box-border box-shadow`}
              >
                <div
                  className={`flex justify-center items-center ${styles.helpIconDiv}`}
                >
                  <Icon className="color-primary" />
                </div>
                <h3 className="text-xl margin-block-none">{category.title}</h3>
                <p className="text-md color-foreground margin-block-none">
                  {category.description}
                </p>
                <ul className={`${styles.helpUl}`}>
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a href={article.link} className={`${styles.helpA}`}>
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className={`box-border ${styles.contactDiv}`}>
          <h2 className="text-2xl margin-block-none">Still Need Help?</h2>
          <p className={`color-foreground ${styles.contactP}`}>
            Can't find what you're looking for? Our support team is ready to
            assist you with any questions or concerns.
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-lg">
            <Link to="/contact" className={`${styles.contactSupportLink}`}>
              Contact Support
            </Link>
            <a
              href="mailto:support@techstore.com"
              className={`${styles.contactSupportA}`}
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
