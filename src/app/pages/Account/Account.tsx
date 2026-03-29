import { LogOut, Mail, Package, Phone, User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button/Button";
import styles from "./account.module.css";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

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
        return "statusDelivered";
      case "shipped":
        return "statusShipped";
      case "processing":
        return "statusProcessing";
      default:
        return "statusDefault";
    }
  };
  return (
    <div className={`bg-color-white ${styles.mainBox}`}>
      <div className={`container ${styles.containerBox}`}>
        <h1>My Account</h1>
        <div className="flex flex-wrap justify-between gap-md">
          {/* Profile Info */}
          <div
            className={`flex flex-col items-center box-border gap-md padding ${styles.profileBox}`}
          >
            <div
              className={`flex items-center justify-center rounded-full ${styles.userIconDiv}`}
            >
              <User className={`color-primary ${styles.userIcon}`} />
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
              className={`w-full ${styles.editBtn}`}
              variant="secondary"
              size="md"
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
          <div className={`${styles.ordersBox} flex flex-col gap-lg`}>
            <div
              className={`padding box-border border-radius border-box ${styles.orderHistoryBox}`}
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
                        <p className="text-semibold margin-block-none">
                          {order.id}
                        </p>
                        <p className="text-sm color-foreground margin-block-none">
                          {order.date}
                        </p>
                      </div>
                      <span
                        className={clsx(
                          "text-sm rounded-full text-semibold",
                          styles[getStatusColor(order.status)],
                        )}
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
              <div
                className={`flex flex-col gap-sm padding box-border border-radius ${styles.additionalSectionBox}`}
              >
                <h3 className="margin-block-none">Addresses</h3>
                <p className="text-sm color-foreground margin-block-none">
                  Manage your shipping addresses
                </p>
                <Button
                  variant="secondary"
                  className={`w-full margin-t ${styles.manageBtn}`}
                >
                  Manage Addreses
                </Button>
              </div>
              <div
                className={`flex flex-col gap-sm padding box-border border-radius ${styles.additionalSectionBox}`}
              >
                <h3 className="margin-block-none">Payment Methods</h3>
                <p className="text-sm color-foreground margin-block-none">
                  Manage your payment options
                </p>
                <Button
                  variant="secondary"
                  className={`w-full margin-t ${styles.manageBtn}`}
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
