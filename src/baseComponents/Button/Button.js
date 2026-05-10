export const Button = ({
  children,
  variant = "icon",
  onClick,
  className = "",
  disabled = false,
}) => {
  const variants = {
    icon: "text-white text-2xl hover:scale-110 transition disabled:opacity-50",
    primary:
      "bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50",
    outline:
      "border border-gray-600 text-white px-6 py-2 rounded-lg hover:border-white transition disabled:opacity-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
