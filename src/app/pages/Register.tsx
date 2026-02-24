import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Formik } from "formik";
import { registerSchema } from "../schemas/RegisterFormSchema";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  term: boolean;
};

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { loginWithGoogle } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-full flex flex-col items-center"
        style={{ maxWidth: "28rem", padding: "0 3rem" }}
      >
        {/*LOGO*/}
        <div className="flex items-center justify-between margin-b">
          <Link
            to="/"
            className="flex items-center justify-between link"
            style={{ width: "145px" }}
          >
            <div style={{ backgroundColor: "#2e57dd", borderRadius: "4px" }}>
              <ShoppingCart className="icon icon-white" />
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: "600",
                color: "#353535",
              }}
            >
              TechStore
            </span>
          </Link>
        </div>
        <div
          className="w-full flex flex-col border-radius border-shadow"
          style={{ padding: "20px" }}
        >
          <h1 className="text-center text-2xl">Create Account</h1>
          <Formik<FormValues>
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
              term: false,
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await register(values.fullName, values.email, values.password);
                navigate("/");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form className="w-full" onSubmit={handleSubmit}>
                {authError ? (
                  <div
                    style={{
                      backgroundColor: "#fee2e2",
                      color: "#b91c1c",
                      padding: "10px",
                      borderRadius: "6px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {authError}
                  </div>
                ) : null}
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  divClass="margin-t"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  error={touched.fullName ? errors.fullName : undefined}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  divClass="margin-t"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email ? errors.email : undefined}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  divClass="margin-t"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password ? errors.password : undefined}
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  divClass="margin-t"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                />

                <div className="flex flex-col  margin-t">
                  <label>
                    <input
                      name="term"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.term}
                      type="checkbox"
                      style={{ accentColor: "#2E57DD", marginRight: "10px" }}
                    />
                    <span>
                      I agree to the{" "}
                      <button
                        className="border-none bg-color-white text-md color-primary link-hover"
                        style={{ cursor: "pointer", fontWeight: "600" }}
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        className="border-none bg-color-white text-md color-primary link-hover"
                        style={{ cursor: "pointer", fontWeight: "600" }}
                      >
                        Privacy Policy
                      </button>
                    </span>
                  </label>
                  {touched.term && errors.term ? (
                    <>
                      <p style={{ fontSize: "0.875rem", color: "#ef4444" }}>
                        {errors.term}
                      </p>
                    </>
                  ) : null}
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full margin-t margin-b"
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </form>
            )}
          </Formik>

          <div>
            <div style={{ position: "relative" }}>
              <div
                className="flex items-center"
                style={{ position: "absolute", inset: "0" }}
              >
                <div
                  className="w-full"
                  style={{ borderTop: "1px solid #6b7280" }}
                ></div>
              </div>
              <div
                className="flex justify-center"
                style={{ position: "relative", fontSize: "0.875rem" }}
              >
                <span
                  className=" bg-color-white color-foreground"
                  style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
                >
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="w-full margin-t"
              onClick={async () => {
                try {
                  setAuthError(null);
                  await loginWithGoogle();
                  navigate("/");
                } catch {
                  setAuthError("Google sign-in failed. Please try again.");
                }
              }}
            >
              <svg
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "10px",
                }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>
          <p className=" text-center text-sm color-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="color-primary link-hover"
              style={{ fontWeight: "600" }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
