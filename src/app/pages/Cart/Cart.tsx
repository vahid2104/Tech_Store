import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import EmptyState from "../../components/EmptyState";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import styles from "./cart.module.css";
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
      <div className={`container ${styles.containerBox}`}>
        <h1 className={`text-3xl font-bold ${styles.mainTitle}`}>
          Shopping Cart
        </h1>

        <div
          className={`w-full flex justify-between gap-md ${styles.mContentBox}`}
        >
          {/* Cart  Items */}
          <div className={`w-full flex flex-col gap-md ${styles.itemsSection}`}>
            {cart.map((item) => (
              <div key={item.id} className={`${styles.cartItemBox} gap-md`}>
                {/* Image */}
                <Link
                  to={`/product/${item.id}`}
                  className={`${styles.cartItemImgDiv}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full ${styles.cartImg}`}
                  />
                </Link>

                {/* Details */}
                <div className={`${styles.cartItemDetail} flex flex-col`}>
                  <Link to={`/product/${item.id}`}>
                    <h3 className={`${styles.cartItemTitle}`}>{item.name}</h3>
                  </Link>
                  <p className="color-foreground text-md line-h-none">
                    {item.category}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-md">
                    {/* Quantity Controls */}
                    <div className="flex gap-md items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className={`${styles.cartItemBtn}`}
                      >
                        <Minus className={`${styles.cartItemIcon}`} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.stock}
                        className={`${styles.cartItemBtn}`}
                      >
                        <Plus className={`${styles.cartItemIcon}`} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className={`h-full flex flex-col ${styles.priceDiv}`}>
                      <p className="text-md text-bold margin-block-none">
                        ${item.price * item.quantity}
                      </p>
                      <p className="text-md color-foreground margin-block-none">
                        ${item.price} each
                      </p>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={`${styles.cartRemoveBtn}`}
                >
                  <Trash2 className={`${styles.cartItemIcon}`} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className={`${styles.sumSection}`}>
            <div
              className={`${styles.sumBox} border-radius`}
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
                <hr className={`w-full border-none ${styles.hr}`} />
                <div className="w-full flex justify-between">
                  <span className="text-bold">Total</span>
                  <span className="text-2xl text-bold">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {subTotal < 100 && (
                <div className={`${styles.shippingDiv}`}>
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
                className={`w-full ${styles.continueBtn}`}
                size="lg"
                variant="secondary"
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
