import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import "./checkout.css";
import { Check, CreditCard } from "lucide-react";
import { Button } from "../../components/Button/Button";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const subTotal = cartTotal;
  const tax = subTotal * 0.1;
  const shipping = subTotal > 100 ? 0 : 15;
  const total = subTotal + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Clear cart and navigate to success page
    clearCart();
    navigate("/order-success");
  };
  return (
    <div className="min-h-screen">
      <div className="container" style={{ padding: "1rem 1rem 3rem 1rem" }}>
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between gap-md">
            {/* Checkout Form */}
            <div className="forms-section">
              {/* Shipping Information */}
              <div className="forms-box">
                <h2>Shipping Information</h2>
                <div className="flex flex-col gap-lg">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Maximoff"
                  />
                  <div className="flex gap-md responsive-inputs">
                    <Input
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                    <Input
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (555) 123 - 4567"
                    />
                  </div>
                  <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="123 Main Street"
                  />
                  <div className="flex gap-md responsive-inputs">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="New York"
                    />
                    <Input
                      label="Postal Code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
              {/* Payment Method */}
              <div className="forms-box">
                <h2>Payment Method</h2>

                <div className="w-full flex margin-b">
                  <label className="payment-label">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <CreditCard className="color-foreground" />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>
                {paymentMethod === "card" && (
                  <div className="flex flex-col gap-md">
                    <Input
                      label="Card Number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="1234 5678 9012 3456"
                    />
                    <div className="flex gap-md">
                      <Input
                        label="Expiry Date"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                      />
                      <Input
                        label="CVV"
                        name="cardCvv"
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="sum-section">
              <div
                className="sum-box border-radius"
                style={{ border: "1px solid rgb(221, 220, 220)" }}
              >
                <h2>Order Summary</h2>

                {/* Products */}
                <div className="flex flex-col gap-md margin-b">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="sum-product-img"
                      />
                      <div className="sum-content">
                        <p className="text-bold" style={{ marginBlock: "0" }}>
                          {item.name}
                        </p>
                        <p
                          className="color-foreground"
                          style={{ marginBlock: "0" }}
                        >
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-bold" style={{ marginBlock: "0" }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <hr
                  className="w-full border-none"
                  style={{
                    height: "1.5px",
                    backgroundColor: "rgb(221, 220, 220)",
                  }}
                />
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
                  className="w-full flex gap-md"
                  size="lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      <Check />
                      Place Order
                    </>
                  )}
                </Button>
                <p className="text-sm text-center color-foreground">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
