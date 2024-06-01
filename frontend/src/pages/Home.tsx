import Card from "../components/ui/Card"
import products from "../products"

const Home = () => {
    const renderedProducts = products.map(p=>{
        return <Card id={p._id} image={p.image} name={p.name} brand={p.brand} price={p.price}/>
    })
  return (
    <div className="flex flex-row justify-center w-full items-center">
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {renderedProducts}
        </div>


    </div>
  )
}

export default Home