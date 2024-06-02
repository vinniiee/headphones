import { useParams } from "react-router-dom"
import ProductDescription from "../components/ProductDescription"
import products from "../products";
import { Product } from "../types/product";

const ProductShow = () => {
    const {id} = useParams();
    const product:Product|undefined = products.find((p)=>p._id===id)
    return (
    product?<ProductDescription p={product}/>:<p>Product not found.</p>
  )
}

export default ProductShow