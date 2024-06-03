import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import { Product } from "../types/product";
import axios from "axios";

const Home = () => {
  const [products,setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const res = await axios.get("/api/products");
      setProducts(res.data);
    }
    fetchProducts(); 
  },[])

  const renderedProducts = products.map((p) => {
    return (
      <Card
        id={p._id}
        image={p.image}
        name={p.name}
        brand={p.brand}
        price={p.price}
        rating={p.rating}
        reviewsCount={p.numReviews}
      />
    );
  });
  return (
    <div className="flex flex-row justify-center w-full items-center">
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {renderedProducts}
      </div>
    </div>
  );
};

export default Home;
