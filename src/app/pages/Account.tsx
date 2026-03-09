import { LogOut, Mail, Package, Phone, User } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";
import "../styles/account.css";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const { user, logout, orders } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "status-delivered";
      case "shipped":
        return "status-shipped";
      case "processing":
        return "status-processing";
      default:
        return "status-default";
    }
  };
  return (
    <div className="min-h-screen bg-color-white">
      <div className="container" style={{ paddingBottom: "2rem" }}>
        <h1>My Account</h1>
        <div className="flex flex-wrap justify-between gap-md">
          {/* Profile Info */}
          <div className="flex flex-col items-center box-border gap-md padding profile-box">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "6rem",
                height: "6rem",
                backgroundColor: "rgb(214, 229, 248)",
              }}
            >
              <User
                className="color-primary"
                style={{ width: "3rem", height: "3rem" }}
              />
            </div>
            <h2 className="text-xl">{user?.name}</h2>
            <div className="w-full flex flex-col gap-md">
              <div className="flex gap-md color-foreground">
                <Mail />
                <span>{user?.email}</span>
              </div>
              <div className="flex gap-md color-foreground">
                <Phone />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <Button
              className="w-full"
              variant="secondary"
              size="md"
              style={{ backgroundColor: "rgb(228, 228, 228)" }}
              onClick={() => {
                /* Edit Profile */
              }}
            >
              Edit Profile
            </Button>
            <Button className="w-full" variant="danger" onClick={handleLogout}>
              <LogOut />
              Logout
            </Button>
          </div>

          {/* Order History */}
          <div className="order-history-box flex flex-col gap-lg">
            <div
              className="padding box-border border-radius"
              style={{ boxSizing: "border-box" }}
            >
              <div className="flex items-center gap-md">
                <Package className="color-primary" />
                <h2 className="text-xl">Order History</h2>
              </div>

              <div className="flex flex-col gap-md">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex flex-col gap-md padding box-border border-radius border"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p
                          className="text-semibold"
                          style={{ marginBlock: "0" }}
                        >
                          {order.id}
                        </p>
                        <p
                          className="text-sm color-foreground"
                          style={{ marginBlock: "0" }}
                        >
                          {order.date}
                        </p>
                      </div>
                      <span
                        className={`text-sm rounded-full text-semibold ${getStatusColor(order.status)}`}
                        style={{ padding: "5px 15px" }}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                      <div>
                        <span className="color-foreground">Items:</span>
                        <span className="text-semibold">{order.items}</span>
                      </div>
                      <div>
                        <span className="color-foreground">Total:</span>
                        <span className="text-semibold text-lg">
                          ${order.total}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="md"
                        style={{ color: "black" }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Sections */}
            <div className="flex flex-wrap justify-between gap-sm">
              <div className="flex flex-col gap-sm padding box-border border-radius additional-section-box">
                <h3 style={{ marginBlock: "0" }}>Addresses</h3>
                <p
                  className="text-sm color-foreground"
                  style={{ marginBlock: "0" }}
                >
                  Manage your shipping addresses
                </p>
                <Button
                  variant="secondary"
                  className="w-full margin-t"
                  style={{ backgroundColor: "rgb(228, 228, 228)" }}
                >
                  Manage Addreses
                </Button>
              </div>
              <div className="flex flex-col gap-sm padding box-border border-radius additional-section-box">
                <h3 style={{ marginBlock: "0" }}>Payment Methods</h3>
                <p
                  className="text-sm color-foreground"
                  style={{ marginBlock: "0" }}
                >
                  Manage your payment options
                </p>
                <Button
                  variant="secondary"
                  className="w-full margin-t"
                  style={{ backgroundColor: "rgb(228, 228, 228)" }}
                >
                  Manage payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
