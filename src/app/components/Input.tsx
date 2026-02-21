interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  divClass?: string;
  error?: string;
}

export function Input({
  label,
  divClass,
  error,
  className = "",
  ...props
}: InputProps) {
  const inputStyle: React.CSSProperties = {
    padding: "10px 15px 10px 40px",
    fontSize: "1.2rem",
    color: "#888",
    border: error ? "1px solid #ef4444" : "1px solid #d6d3d3",
    boxSizing: "border-box",
  };

  return (
    <div className="w-full">
      {label ? (
        <div className={divClass}>
          <label
            style={{
              display: "block",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              marginBottom: "0.5rem",
              color: error ? "#ef4444" : "#1a1a1a",
            }}
          >
            {label}
          </label>

          <input style={inputStyle} className={`w-full border-radius ${className}`} {...props} />

          {error ? (
            <p style={{ marginTop: "6px", fontSize: "0.875rem", color: "#ef4444" }}>
              {error}
            </p>
          ) : null}
        </div>
      ) : (
        <>
          <input style={inputStyle} className={`w-full border-radius ${className}`} {...props} />

          {error ? (
            <p style={{ marginTop: "6px", fontSize: "0.875rem", color: "#ef4444" }}>
              {error}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}