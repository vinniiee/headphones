import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`p-2 bg-black px-4 text-white rounded-sm text-sm ${className}`}
    >
      <p className="mt-0.5">{children}</p>
    </button>
  );
};

export default Button;
