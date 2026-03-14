import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import EmptyState from "../../components/EmptyState";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import "./cart.css";
import { Button } from "../../components/Button/Button";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const subTotal = cartTotal;
  const tax = subTotal * 0.1; // 10% tax
  const shipping = subTotal > 100 ? 0 : 15;
  const total = subTotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-color-white flex items-center justify-center">
        <EmptyState
          icon={ShoppingBag}
          title="Your cart is empty"
          description="Add some products to your cart and they will appear here."
          actionLabel="Continue Shopping"
          onAction={() => navigate("/products")}
        />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-color-white">
      <div className="container" style={{ padding: "2rem 20px" }}>
        <h1 className="text-3xl font-bold" style={{ marginBottom: "2rem" }}>
          Shopping Cart
        </h1>

        <div className="w-full flex justify-between gap-md m-content-box">
          {/* Cart  Items */}
          <div className="w-full flex flex-col gap-md items-section">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-box gap-md">
                {/* Image */}
                <Link to={`/product/${item.id}`} className="cart-item-img">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                  />
                </Link>

                {/* Details */}
                <div className="cart-item-detail flex flex-col">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="cart-item-title">{item.name}</h3>
                  </Link>
                  <p className="color-foreground text-md line-h-none">
                    {item.category}
                  </p>

                  <div
                    className="flex flex-wrap items-center justify-between"
                    style={{ minHeight: "50px" }}
                  >
                    {/* Quantity Controls */}
                    <div className="flex gap-md items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="cart-item-btn"
                      >
                        <Minus className="cart-item-icon" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.stock}
                        className="cart-item-btn"
                      >
                        <Plus className="cart-item-icon" />
                      </button>
                    </div>

                    {/* Price */}
                    <div
                      className="h-full flex flex-col"
                      style={{ alignItems: "flex-end" }}
                    >
                      <p
                        className="text-md text-bold"
                        style={{ marginBlock: "0" }}
                      >
                        ${item.price * item.quantity}
                      </p>
                      <p
                        className="text-md color-foreground"
                        style={{ marginBlock: "0" }}
                      >
                        ${item.price} each
                      </p>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cart-item-btn"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    border: "none",
                    color: "rgb(209, 49, 49)",
                  }}
                >
                  <Trash2 className="cart-item-icon" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="sum-section">
            <div
              className="sum-box border-radius"
              style={{ border: "1px solid rgb(221, 220, 220)" }}
            >
              <h2>Order Summary</h2>
              <div className="flex flex-col gap-sm padding-t-b">
                <div className="w-full flex items-center justify-between">
                  <span className="color-foreground">Subtotal</span>
                  <span className="text-sm text-bold">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <span className="color-foreground">Shipping</span>
                  <span className="text-sm text-bold">
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <span className="color-foreground">Tax (10%)</span>
                  <span className="text-sm text-bold">${tax.toFixed(2)}</span>
                </div>
                <hr
                  className="w-full border-none"
                  style={{
                    height: "1.5px",
                    backgroundColor: "rgb(221, 220, 220)",
                  }}
                />
                <div className="w-full flex justify-between">
                  <span className="text-bold">Total</span>
                  <span className="text-2xl text-bold">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {subTotal < 100 && (
                <div
                  style={{
                    width: "100%",
                    padding: "0 1rem",
                    border: "1px solid rgb(121, 151, 190)",
                    backgroundColor: "rgb(193, 208, 231)",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                  }}
                >
                  <p className="color-primary">
                    Add ${(100 - subTotal).toFixed(2)} more to get FREE
                    shipping!
                  </p>
                </div>
              )}

              <Button
                className="w-full margin-y"
                size="lg"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
              <Button
                className="w-full"
                size="lg"
                variant="secondary"
                style={{ backgroundColor: "rgb(224, 224, 224)" }}
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
