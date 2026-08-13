import { Star } from "lucide-react";

export default function RatingStars({ rating = 0, size = 16, className = "" }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`Rating ${rating} dari 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const isFilled = i < full || (i === full && hasHalf);
        return (
          <Star
            key={i}
            size={size}
            className={
              isFilled
                ? "text-primary fill-primary"
                : "text-primary/30"
            }
          />
        );
      })}
    </div>
  );
}
