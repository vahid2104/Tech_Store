import { ArrowRight, CheckCircle, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export default function OrderSuccess() {
  const [orderId] = useState(
    () => "ORD-" + Math.random().toString(36).slice(2, 11).toUpperCase(),
  );
  return (
    <div className="min-h-screen">
      <div
        className="container flex items-center justify-center"
        style={{ padding: "1rem 1rem 3rem 1rem" }}
      >
        <div
          className="flex flex-col items-center justify-center text-center gap-lg"
          style={{ maxWidth: "800px" }}
        >
          {/* Success Icon */}
          <div className="flex justify-center">
            <div
              className="flex items-center justify-center"
              style={{
                width: "6rem",
                height: "6rem",
                backgroundColor: "rgb(169, 224, 178)",
                borderRadius: "9999px",
              }}
            >
              <CheckCircle
                style={{
                  width: "4rem",
                  height: "4rem",
                  color: "rgb(48, 136, 62)",
                }}
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl">Order Placed Successfully!</h1>
          <p className="text-lg color-foreground" style={{ marginBlock: "0" }}>
            Thank you for your purchase. Your order has been received and is
            being processed.
          </p>

          {/* Order Details Card */}
          <div
            className="w-full flex flex-col items-center justify-center border-box gap-md"
            style={{
              padding: "1rem 2rem",
              border: "1px solid rgb(221, 220, 220)",
              borderRadius: "1rem",
            }}
          >
            <div className="flex items-center gap-md">
              <Package
                className="color-primary"
                style={{ width: "2rem", height: "2rem" }}
              />
              <h2>Order Details</h2>
            </div>

            <div className="w-full flex flex-col gap-md">
              <div
                className="w-full flex justify-between items-center"
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid rgb(221, 220, 220)",
                }}
              >
                <span className="text-lg color-foreground">Order Number</span>
                <span className="text-semibold">{orderId}</span>
              </div>
              <div
                className="w-full flex justify-between items-center"
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid rgb(221, 220, 220)",
                }}
              >
                <span className="text-lg color-foreground">Order Date</span>
                <span className="text-semibold">February 14, 2026</span>
              </div>
              <div
                className="w-full flex justify-between items-center"
                style={{ padding: "1rem 0" }}
              >
                <span className="text-lg color-foreground">Order Number</span>
                <span className="text-semibold">February 17 - 19, 2026</span>
              </div>
            </div>

            <div
              className="w-full"
              style={{
                backgroundColor: "rgb(208, 221, 248)",
                borderRadius: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p className="text-md" style={{ color: "rgb(19, 65, 165)" }}>
                A confirmation email with your order details has been sent to
                your email address.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-md">
            <Link to="/account">
              <Button className="flex gap-md" size="lg">
                <Package />
                View My Orders
              </Button>
            </Link>
            <Link to="/products">
              <Button
                className="flex gap-md"
                variant="secondary"
                size="lg"
                style={{ backgroundColor: "rgb(232, 232, 233)" }}
              >
                Continue Shopping
                <ArrowRight />
              </Button>
            </Link>
          </div>

          {/* Support Message */}
          <p className="color-foreground">
            Need help with your order?{" "}
            <Link className="color-primary" to="/contact">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
