import { Link } from "react-router-dom";
import BookmarkIcon from "../assets/BookmarkIcon";
import CartIcon from "../assets/CartIcon";
import Ratings from "./Ratings";

interface CardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  reviewsCount: number;
}

const Card = (props: CardProps) => {
  const { name, brand, price, image, id, rating, reviewsCount } = props;
  return (
    <div className="relative rounded overflow-hidden flex flex-col h-[400px] w-[300px] bg-white shadow-md ">
      <BookmarkIcon className="absolute right-2 top-2" />
      <div className="w-[300px] flex justify-center items-start h-[300px]">
        <img className="w-full  " src={image} alt="product" />
      </div>
      <div className="flex p-2 h-[100px]">
        {/* <Link to={`/products/${id}`}> */}
        <Link
          to={`/products/${id}`}
          className=" flex flex-col justify-center  w-[225px] text-black items-start "
        >
          <p className="text-black/40 text-xs">{brand}</p>
          <div className="w-[150px] overflow-hidden">
            <p className="text-black/75 text-sm overflow-hidden whitespace-nowrap text-ellipsis">
              {name}
            </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Ratings rating={rating} />
            <p className="text-2xs text-black/70 flex h-4 mt-0.5 tracking-tighter">
              {reviewsCount} reviews
            </p>
          </div>
          <div className="flex gap-1 mt-.5">
            <img src="rupee-icon.svg" alt="rupee" />
            <p>{price * 100}</p>
          </div>
        </Link>
        {/* </Link> */}
        <div className="w-full flex justify-end items-center">
          <button className="bg-black text-white p-2  text-xs rounded-sm ">
            {/* <CartIcon color="white" className="h-4" /> */}
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
