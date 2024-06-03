import { useParams } from "react-router-dom";
import ProductDescription from "../components/ProductDescription";
import { Product } from "../types/product";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductShow = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    };
    fetchProducts();
  }, [id]);

  return product ? (
    <ProductDescription p={product} />
  ) : (
    <p>Product not found.</p>
  );
};

export default ProductShow;
