export const Card = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-black border border-gray-800",
    feed: "bg-black border-b border-gray-800",
    reels: "bg-black",
  };

  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
};
