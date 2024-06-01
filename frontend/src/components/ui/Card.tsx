import { Link } from "react-router-dom";
import BookmarkIcon from "../assets/BookmarkIcon";
import CartIcon from "../assets/CartIcon";

interface CardProps {
  id:string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

const Card = (props: CardProps) => {
  const { name, brand, price, image,id } = props;
  return (
    <div className="relative rounded-t-md flex flex-col h-[400px] w-[300px] shadow">
      <BookmarkIcon className="absolute right-2 top-2" />
      <div className="w-[300px] flex justify-center items-start h-[300px]">
        <img className="w-full  " src={image} alt="product" />
      </div>
      <div className="flex p-2 h-[100px]">
        {/* <Link to={`/products/${id}`}> */}
        <Link to={`/products/${id}`} className=" flex flex-col justify-center  w-[225px] text-black items-start ">
          <p className="text-black/40 text-xs">{brand}</p>
          <div className="w-[150px] overflow-hidden">
            <p className="text-black/75 text-xs overflow-hidden whitespace-nowrap text-ellipsis">
              {name}
            </p>
          </div>
          <div className="flex gap-1 mt-.5">
            <img src="rupee-icon.svg" alt="rupee"/>
            <p>{price*100}</p>
          </div>
        </Link>
        {/* </Link> */}
        <div className="w-full flex justify-end items-center">
          <button className="bg-black p-2 px-3  rounded-sm ">
            <CartIcon color="white" className="h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
