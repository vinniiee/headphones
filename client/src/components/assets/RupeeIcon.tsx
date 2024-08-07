import { AssetProps } from "./asset-types";

const RupeeIcon = ({ color, variant, className,size }: AssetProps) => {
  if (!color) {
    color = variant || "black";
  }
  return (
    <svg
      height={size || "10"}
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.00946 9.99718L0.34124 5.47104L0.362429 4.57404C2.08401 4.69106 3.42244 4.51134 3.73384 2.90544L0.065576 2.88468L0.659282 1.90421L3.58541 1.94574C3.13956 1.03197 1.91339 0.919343 0.00195312 0.986438L0.659282 0.0267362L6.87213 0.0175781L6.25721 0.96534H4.53971C4.85362 1.29212 5.08336 1.66812 5.09102 1.98739L6.87213 1.96653L6.25721 2.90514L5.0698 2.926C4.88443 4.32614 3.57998 5.15512 1.93162 5.34559L5.62442 9.99594L4.00959 9.99681L4.00946 9.99718Z"
        fill={color}
        stroke={color}
        strokeWidth="0.099084"
      />
    </svg>
  );
};

export default RupeeIcon;
