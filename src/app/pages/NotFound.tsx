import { useNavigate } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../components/Button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-color-white flex items-center justify-center container">
      <div className="text-center">
        <h1
          className="text-bold color-primary margin-block-none"
          style={{ fontSize: "5rem" }}
        >
          404
        </h1>
        <h2 className="text-3xl text-bold">Page Not Found</h2>
        <p className="color-foreground">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="gap-md"
          onClick={() => navigate("/")}
        >
          <Home />
          Back to Home
        </Button>
      </div>
    </div>
  );
};
