import { CheckCircle, Clock, Package, RotateCcw, XCircle } from "lucide-react";
import "./returns.css";
import { Link } from "react-router-dom";

export default function Returns() {
  const returnSteps = [
    {
      step: "1",
      title: "Initiate Return",
      description:
        "Log into your account and go to Order History. Select the item you want to return.",
    },
    {
      step: "2",
      title: "Print Label",
      description:
        "Print the prepaid return shipping label provided in your account.",
    },
    {
      step: "3",
      title: "Pack Item",
      description:
        "Securely pack the item in its original packaging with all accessories.",
    },
    {
      step: "4",
      title: "Ship Back",
      description: "Drop off the package at any authorized shipping location.",
    },
    {
      step: "5",
      title: "Get Refund",
      description:
        "Receive your refund within 5-7 business days after we receive the item.",
    },
  ];

  const eligibleItems = [
    "Unopened products in original packaging",
    "Items with all original accessories",
    "Products with tags and labels attached",
    "Defective or damaged items",
    "Items returned within 30 days",
  ];

  const nonEligibleItems = [
    "Items without original packaging",
    "Used or damaged products",
    "Products past 30-day return window",
    "Final sale or clearance items",
    "Gift cards and digital products",
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full gradient-header" style={{ padding: "3rem 0" }}>
        <div className="container flex justify-center">
          <div
            className="text-center flex flex-col items-center"
            style={{ maxWidth: "850px" }}
          >
            <div
              className="shipping-icons-div"
              style={{ width: "70px", height: "70px", marginBottom: "2rem" }}
            >
              <RotateCcw style={{ width: "40px", height: "40px" }} />
            </div>
            <h1 className="text-4xl margin-block-none">Returns & Refunds</h1>
            <p className="text-lg color-foreground">
              We want you to be completely satisfied with your purchase. If
              you're not happy, we'll make it right.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container flex flex-col"
        style={{ padding: "3rem 20px", gap: "3rem" }}
      >
        {/* Return Policy Overview */}
        <div
          className="box-border border-radius border-box flex flex-col"
          style={{ padding: "2rem", gap: "0.2rem" }}
        >
          <h2 className="margin-block-none">30-Day Return Policy</h2>
          <p>
            We accept returns within 30 days of delivery for most products.
            Items must be in original, unused condition with all packaging,
            accessories, and documentation. Return shipping is free for
            defective items, otherwise a small fee may apply.
          </p>
          <div className="flex justify-between return-policy-box">
            <div className="flex items-center gap-md">
              <div
                className="return-policy-icons"
                style={{
                  backgroundColor: "rgba(92, 206, 92, 0.185)",
                  color: "rgb(99, 226, 14)",
                }}
              >
                <Clock />
              </div>
              <div>
                <h3 className="margin-block-none">30 Days</h3>
                <p className="color-foreground margin-block-none">
                  Return window from delivery date
                </p>
              </div>
            </div>
            <div className="flex items-center gap-md">
              <div
                className="return-policy-icons"
                style={{
                  backgroundColor: "rgba(14, 124, 226, 0.2)",
                  color: "rgb(14, 124, 226)",
                }}
              >
                <Package />
              </div>
              <div>
                <h3 className="margin-block-none">30 Days</h3>
                <p className="color-foreground margin-block-none">
                  Return window from delivery date
                </p>
              </div>
            </div>
            <div className="flex items-center gap-md">
              <div
                className="return-policy-icons"
                style={{
                  backgroundColor: "rgba(191, 14, 226, 0.22)",
                  color: "rgb(191, 14, 226)",
                }}
              >
                <RotateCcw />
              </div>
              <div>
                <h3 className="margin-block-none">30 Days</h3>
                <p className="color-foreground margin-block-none">
                  Return window from delivery date
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Return */}
        <div>
          <h2
            className="margin-block-none"
            style={{ marginBottom: "2rem", fontSize: "2rem" }}
          >
            How to Return an Item
          </h2>
          <div
            className="flex how-return-div"
            style={{ height: "fit-content" }}
          >
            {returnSteps.map((item, index) => (
              <div
                key={index}
                className={`how-return-box how-return-box-${index}`}
              >
                <div
                  key={index}
                  className="how-return-item box-border border-radius"
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(10, 116, 216, 0.23)",
                      color: "rgb(10, 116, 216)",
                    }}
                  >
                    <span className="text-xl text-semibold">{item.step}</span>
                  </div>
                  <h3 className="text-xl margin-block-none">{item.title}</h3>
                  <p className="color-foreground margin-block-none">
                    {item.description}
                  </p>
                </div>
                <hr className={`how-return-hr how-return-hr-${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Eligible Items */}
        <div className="flex flex-wrap justify-between">
          <div
            className="eligible-items-box"
            style={{ border: "1px solid rgb(72, 218, 72)" }}
          >
            <div className="flex items-center gap-md">
              <CheckCircle
                style={{
                  width: "35px",
                  height: "35px",
                  color: "rgb(72, 218, 72)",
                }}
              />
              <h3>Eligible for Return</h3>
            </div>
            <ul>
              {eligibleItems.map((item, index) => (
                <li key={index} className="flex gap-sm">
                  <CheckCircle style={{ color: "rgb(72, 218, 72)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="eligible-items-box border">
            <div className="flex items-center gap-md">
              <XCircle
                style={{ width: "35px", height: "35px", color: "red" }}
              />
              <h3>Not Eligible for Return</h3>
            </div>
            <ul>
              {nonEligibleItems.map((item, index) => (
                <li key={index} className="flex gap-sm">
                  <XCircle style={{ color: "red" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Refund Information */}
        <div className="box-border border-radius" style={{ padding: "2rem" }}>
          <h2 className="margin-block-none" style={{ marginBottom: "1.5rem" }}>
            Refund Information
          </h2>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-md ref-info">
              <h3 className="margin-block-none">Processing Time</h3>
              <p className="color-foreground margin-block-none">
                Once we receive your returned item, we'll inspect it and process
                your refund within 3-5 business days. You'll receive an email
                confirmation when the refund is issued.
              </p>
            </div>
            <div className="flex flex-col gap-md ref-info">
              <h3 className="margin-block-none">Refund Method</h3>
              <p className="color-foreground margin-block-none">
                Refunds are issued to the original payment method. Credit card
                refunds may take 5-10 business days to appear on your statement,
                depending on your bank.
              </p>
            </div>
            <div className="flex flex-col gap-md ref-info">
              <h3 className="margin-block-none">Partial Refunds</h3>
              <p className="color-foreground margin-block-none">
                Partial refunds may be issued for items returned without
                original packaging or showing signs of use. We'll contact you
                before processing a partial refund.
              </p>
            </div>
            <div className="flex flex-col gap-md ref-info">
              <h3 className="margin-block-none">Return Shipping Costs</h3>
              <p className="color-foreground margin-block-none">
                Return shipping is free for defective or damaged items. For
                other returns, a $5.99 return shipping fee will be deducted from
                your refund.
              </p>
            </div>
          </div>
        </div>

        {/* Exchange Information */}
        <div className="box-border border-radius" style={{ padding: "2rem" }}>
          <h2 style={{ marginBlockStart: "0" }}>Exchanges</h2>
          <p className="color-foreground">
            If you'd like to exchange an item for a different size, color, or
            model, please follow these steps:
          </p>
          <ol className="color-foreground">
            <li>Return the original item following the return process above</li>
            <li>Place a new order for the item you'd like instead</li>
            <li>
              Once we receive and process your return, your refund will be
              issued
            </li>
          </ol>
          <p className="color-foreground">
            <strong className="color-black">Note: </strong> We recommend placing
            your new order right away to ensure the item you want is in stock.
            Your refund will be processed as soon as we receive the returned
            item.
          </p>
        </div>

        {/* Defective Items */}
        <div className="defective-items-box">
          <h2 style={{ marginBlockStart: "0" }}>Defective or Damaged Items</h2>
          <p className="color-foreground">
            If you receive a defective or damaged item, we sincerely apologize.
            We'll make it right immediately.
          </p>
          <ul
            className="color-foreground flex flex-col gap-md"
            style={{ listStyle: "none", padding: "0" }}
          >
            <li className="flex gap-sm">
              <CheckCircle style={{ color: "rgb(72, 218, 72)" }} />
              <span>Free return shipping with prepaid label</span>
            </li>
            <li className="flex gap-sm">
              <CheckCircle style={{ color: "rgb(72, 218, 72)" }} />
              <span>Full refund or replacement at no cost</span>
            </li>
            <li className="flex gap-sm">
              <CheckCircle style={{ color: "rgb(72, 218, 72)" }} />
              <span>Priority processing for defective items</span>
            </li>
            <li className="flex gap-sm">
              <CheckCircle style={{ color: "rgb(72, 218, 72)" }} />
              <span>Contact us within 7 days of receiving the item</span>
            </li>
          </ul>
          <Link to="/contact" className="report-link">
            Report a Problem
          </Link>
        </div>

        {/* FAQ */}
        <div>
          <h2>Frequently Asked Questions</h2>
          <div className="flex flex-wrap justify-between">
            <div
              className="box-border border-radius padding faq-boxes"
              style={{ marginBottom: "1rem" }}
            >
              <h3 style={{ marginBlockStart: "0" }}>
                Can I return sale items?
              </h3>
              <p className="color-foreground">
                Yes, most sale items can be returned within 30 days. However,
                items marked as "Final Sale" or "Clearance" cannot be returned
                unless defective.
              </p>
            </div>
            <div
              className="box-border border-radius padding faq-boxes"
              style={{ marginBottom: "1rem" }}
            >
              <h3 style={{ marginBlockStart: "0" }}>
                What if I lost my receipt?
              </h3>
              <p className="color-foreground">
                If you have an account with us, we can look up your order
                history. For guest orders, please contact customer service with
                your order number.
              </p>
            </div>
            <div
              className="box-border border-radius padding faq-boxes"
              style={{ marginBottom: "1rem" }}
            >
              <h3 style={{ marginBlockStart: "0" }}>
                How do I track my return?
              </h3>
              <p className="color-foreground">
                Use the tracking number from your return shipping label to track
                your package. We'll also send you an email when we receive your
                return.
              </p>
            </div>
            <div
              className="box-border border-radius padding faq-boxes"
              style={{ marginBottom: "1rem" }}
            >
              <h3 style={{ marginBlockStart: "0" }}>
                Can I return opened electronics?
              </h3>
              <p className="color-foreground">
                Opened electronics can be returned if defective or if returned
                within the 30-day window. Items must include all original
                accessories and packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="box-border contact-div">
          <h2 className="text-2xl margin-block-none">
            Need Help with a Return?
          </h2>
          <p className="color-foreground">
            Our customer service team is here to assist you with the return
            process.
          </p>
          <Link to="/contact" className="contact-support-link">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
