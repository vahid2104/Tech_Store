interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  divClass?: string;
  error?: string;
}
export function Input({ label, divClass, error, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label ? (
        <div className={divClass}><label
          style={{
            display: "block",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginBottom: "0.5rem",
            color: "#1a1a1a",
          }}
        >
          {label}
        </label>
        <input
        style={{
                padding: "10px 15px 10px 40px",
                fontSize: "1.2rem",
                color: "#888",
                border: "1px solid #d6d3d3",
                boxSizing: "border-box",
              }}
        className={`w-full border-radius ${className}`}
        {...props}
      />
        </div>
        
      ) : (
        <input
        style={{
                padding: "10px 15px 10px 40px",
                fontSize: "1.2rem",
                color: "#888",
                border: "1px solid #d6d3d3",
                boxSizing: "border-box",
              }}
        className={`w-full border-radius ${className}`}
        {...props}
      />
      )}
      
      {error && <p>{error}</p>}
    </div>
  );
}
