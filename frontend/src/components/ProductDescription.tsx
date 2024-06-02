import { Link } from "react-router-dom";
import { Product } from "../types/product";
import BookmarkIcon from "./assets/BookmarkIcon";
import Ratings from "./ui/Ratings";
import CartIcon from "./assets/CartIcon";
import { Image } from "react-bootstrap";

const ProductDescription = ({ p }: { p: Product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-[1000px]">
      <Image src={p.image} alt="product" fluid className="md:w-1/2 rounded shadow-sm" />
      <div className="relative md:w-1/2 justify-between rounded p-2  overflow-hidden flex flex-col bg-white shadow-md ">
        <BookmarkIcon className="absolute right-2 top-2" />
        <div className="flex flex-col  p-2">
          {/* <Link to={`/products/${id}`}> */}
          <div className=" flex flex-col justify-center  text-black items-start ">
            <div className="flex flex-col justify-start items-start">
              <p className="text-black/40 text-sm">{p.brand}</p>
              <div className="overflow-hidden">
                <p className="text-black/75 text-lg leading-5 mt-1 mr-14 overflow-hidden">
                  {p.name}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 my-2">
                <Ratings rating={p.rating} />
                <p className="text-2xs text-black/70 flex h-4 mt-0.5 tracking-tighter">
                  {p.numReviews} reviews
                </p>
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex gap-1 my-2">
                  <img src="/rupee-icon.svg" alt="rupee" />
                  <p
                    className={`${
                      p.countInStock === 0 && "line-through text-black/50"
                    }`}
                  >
                    {p.price * 100}
                  </p>
                </div>
                <div>
                  <p className="text-black/70">
                    {p.countInStock > 0 ? "In stock." : "Out of stock."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm my-4 text-black/80 leading-5 md:w-4/5">
            {p.description}
          </p>
          {/* </Link> */}
          <div className="w-full flex flex-col md:flex-row  justify-between gap-2 items-center">
            <button className="flex justify-center items-center  h-16 text-white bg-black 
            w-full md:w-1/2 rounded-sm uppercase ">
              <p className="h-8 -mb-0.5 leading-8">buy now</p>
            </button>
            <button
              className="flex uppercase justify-center w-full md:w-1/2 items-center text-sm gap-2
             text-black bg-black/10 h-16  rounded-sm "
            >
              <CartIcon color="black" className="h-8" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
