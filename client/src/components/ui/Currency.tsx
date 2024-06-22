import RupeeIcon from "../assets/RupeeIcon";

const Currency = ({
  amount,
  className,
}: {
  amount: number;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-0.5 text-black/70 ${className}`}>
      <RupeeIcon />
      {amount}
    </div>
  );
};

export default Currency;
