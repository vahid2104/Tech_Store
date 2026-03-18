import { CheckCircle, Clock, Globe, Package, Truck } from "lucide-react";
import "./shipping.css";
import { Link } from "react-router-dom";

export default function Shipping() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      time: "5-7 Business Days",
      cost: "FREE on orders over $50",
      regularCost: "$5.99",
      icon: Package,
      features: [
        "Track your package online",
        "Signature not required",
        "Weekend delivery available",
        "Insurance included",
      ],
    },
    {
      name: "Express Shipping",
      time: "2-3 Business Days",
      cost: "$12.99",
      icon: Truck,
      features: [
        "Priority handling",
        "Real-time tracking",
        "Signature required",
        "Full insurance coverage",
      ],
    },
    {
      name: "Overnight Shipping",
      time: "Next Business Day",
      cost: "$24.99",
      icon: Clock,
      features: [
        "Fastest delivery option",
        "Order by 2 PM for next day",
        "Signature required",
        "Premium insurance",
      ],
    },
  ];

  const internationalShipping = [
    { country: "Canada", time: "7-10 days", cost: "$15.99" },
    { country: "United Kingdom", time: "10-14 days", cost: "$25.99" },
    { country: "European Union", time: "10-14 days", cost: "$28.99" },
    { country: "Australia", time: "12-16 days", cost: "$32.99" },
    { country: "Other Countries", time: "14-21 days", cost: "Varies" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full gradient-header" style={{ padding: "2rem 0" }}>
        <div className="container flex justify-center">
          <div
            className="text-center flex flex-col items-center"
            style={{ maxWidth: "850px" }}
          >
            <div
              className="shipping-icons-div"
              style={{ width: "70px", height: "70px", marginBottom: "2rem" }}
            >
              <Truck style={{ width: "40px", height: "40px" }} />
            </div>
            <h1 className="text-4xl margin-block-none">Shipping Information</h1>
            <p className="text-lg color-foreground">
              Fast, reliable shipping to get your products delivered safely and
              on time
            </p>
          </div>
        </div>
      </div>

      <div
        className="container flex flex-col"
        style={{ gap: "3rem", padding: "4rem 20px" }}
      >
        {/* Domestic Shipping Options */}
        <div className="flex flex-col gap-lg">
          <h2 className="margin-block-none" style={{ fontSize: "2rem" }}>
            Domestic Shipping Options
          </h2>
          <div
            className="flex flex-wrap justify-between"
            style={{ alignItems: "stretch" }}
          >
            {shippingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="box-shadow box-border dso-box">
                  <div
                    className="shipping-icons-div"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Icon />
                  </div>
                  <h3 className="text-xl margin-block-none">{option.name}</h3>
                  <div>
                    <p className="text-2xl text-bold color-primary margin-block-none">
                      {option.cost}
                    </p>
                    {option.regularCost && (
                      <p className="margin-block-none color-foreground">
                        Regular: {option.regularCost}
                      </p>
                    )}
                  </div>
                  <p
                    className="flex items-center gap-sm text-semibold"
                    style={{ margin: "0" }}
                  >
                    <Clock style={{ width: "18px", height: "18px" }} />
                    {option.time}
                  </p>
                  <ul className="dso-ul">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-sm">
                        <CheckCircle
                          style={{
                            width: "20px",
                            height: "20px",
                            color: "green",
                          }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* International Shipping */}
        <div className="flex flex-col gap-lg">
          <div className="flex items-center gap-md">
            <Globe
              className="color-primary"
              style={{ width: "40px", height: "40px" }}
            />
            <h2 className="margin-block-none" style={{ fontSize: "2rem" }}>
              International Shipping
            </h2>
          </div>
          <div
            className="border-radius box-border"
            style={{ overflow: "hidden" }}
          >
            <div style={{ overflowX: "auto" }}>
              <table className="shipping-table">
                <thead
                  className="bg-color-gray"
                  style={{
                    borderBottom: "1px solid rgba(128, 128, 128, 0.479)",
                  }}
                >
                  <tr>
                    <th className="shipping-table-th">Destination</th>
                    <th className="shipping-table-th">Delivery Time</th>
                    <th className="shipping-table-th">Shipping Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalShipping.map((item, index) => (
                    <tr key={index} className="shipping-table-tr">
                      <td className="shipping-table-td">{item.country}</td>
                      <td className="color-foreground shipping-table-td">
                        {item.time}
                      </td>
                      <td className="shipping-table-td color-primary text-semibold">
                        {item.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="color-foreground margin-block-none">
            * International orders may be subject to customs fees and import
            duties. These charges are the responsibility of the recipient.
          </p>
        </div>

        {/* Additional Information */}
        <div
          className="flex flex-wrap justify-between"
          style={{ gap: "2.5rem" }}
        >
          <div className="box-border add-info-box">
            <h3 className="margin-block-none">Package Tracking</h3>
            <div className="color-foreground flex flex-col gap-md">
              <p className="margin-block-none">
                <strong className="color-black">Processing Time:</strong> Orders
                are typically processed within 1-2 business days.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Cutoff Time:</strong> Orders
                placed before 2:00 PM EST will be processed the same day.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Weekends:</strong> Orders placed
                on weekends will be processed on the next business day.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Holidays:</strong> Processing
                may be delayed during major holidays.
              </p>
            </div>
          </div>
          <div className="box-border add-info-box">
            <h3 className="margin-block-none">Package Tracking</h3>
            <div className="color-foreground flex flex-col gap-md">
              <p className="margin-block-none">
                <strong className="color-black">Tracking Number:</strong> You'll
                receive a tracking number via email once your order ships.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Real-Time Updates:</strong>{" "}
                Track your package in real-time through our website or the
                carrier's site.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Delivery Alerts:</strong> Get
                notifications when your package is out for delivery and when
                it's delivered.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Account Dashboard:</strong> View
                all your shipments in one place through your account.
              </p>
            </div>
          </div>
          <div className="box-border add-info-box">
            <h3 className="margin-block-none">Package Tracking</h3>
            <div className="color-foreground flex flex-col gap-md">
              <p className="margin-block-none">
                <strong className="color-black">Signature:</strong> Express and
                overnight shipments require a signature upon delivery.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Safe Place:</strong> Standard
                shipping allows packages to be left in a safe place.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Missed Delivery:</strong> If you
                miss a delivery, the carrier will leave a notice with pickup
                instructions.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Delivery Attempts:</strong>{" "}
                Carriers typically make 2-3 delivery attempts before returning
                the package.
              </p>
            </div>
          </div>
          <div className="box-border add-info-box">
            <h3 className="margin-block-none">Package Tracking</h3>
            <div className="color-foreground flex flex-col gap-md">
              <p className="margin-block-none">
                <strong className="color-black">PO Boxes:</strong> We can ship
                to PO Boxes using standard shipping only.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">APO/FPO:</strong> Military
                addresses are supported with standard shipping.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Territories:</strong> We ship to
                all U.S. territories including Puerto Rico, Guam, and U.S.
                Virgin Islands.
              </p>
              <p className="margin-block-none">
                <strong className="color-black">Restricted Items:</strong> Some
                items may have shipping restrictions based on destination.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="box-border contact-div">
          <h2 className="text-2xl margin-block-none">
            Questions About Shipping?
          </h2>
          <p className="color-foreground">
            Our customer service team is here to help with any shipping
            questions or concerns.
          </p>
          <Link to="/contact" className="contact-support-link">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
