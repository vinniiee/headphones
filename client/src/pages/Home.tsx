import Card from "../components/ui/Card";
import Message from "../components/ui/Message";
import { useGetProductsQuery } from "../slices/productApiSlice";
import { Spinner } from "react-bootstrap";

const Home = () => {
  let { data: products, isLoading, error } = useGetProductsQuery();
  let errorMessage;
  if (error) {
    if ("status" in error) {
      // error is FetchBaseQueryError
      errorMessage = (error.data as { message: string }).message;
    } else {
      // error is SerializedError
      errorMessage = error.message;
    }
  }
  const renderedProducts = products?.map((p) => {
    return (
      <Card
        key={p._id}
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
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="danger">{errorMessage}</Message>
        ) : (
          <>{renderedProducts}</>
        )}
      </div>
    </div>
  );
};

export default Home;
