import type { LucideIcon } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ padding: "4rem 1rem" }}
    >
      <div
        className="flex items-center justify-center bg-color-gray rounded-full margin-b"
        style={{ width: "4.5rem", height: "4.5rem" }}
      >
        <Icon
          className="color-foreground"
          style={{ width: "2.5rem", height: "2.5rem" }}
        />
      </div>
      <h3 className="text-xl font-semibold line-h-none">{title}</h3>
      <p
        className="color-foreground text-center"
        style={{ marginBottom: "1.5rem" }}
      >
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary" size="lg">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
