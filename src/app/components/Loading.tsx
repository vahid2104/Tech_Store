import { Loader2 } from 'lucide-react';

export function Loading() {
  return (
    <div className="flex items-center justify-center" style={{minHeight: "400px"}}>
      <div className="text-center">
        <Loader2 style={{width: "48px", height: "48px", color: "#2E57DD", animation: "spin 1s linear infinite", display: "block", margin: "0 auto 16px auto"}} />
        <p className="color-foreground">Loading...</p>
      </div>
       <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
    
  );
}
