
import Product from "./components/Product";
function App() {

  const items= [
    {
      title:"Product1",
      price:10,
      description:"First product"
    },
    {
      title:"Product2",
      price:20,
      description:"Second product"
    }
  ]
  return (
    <div>
      <div>
        <h1 align="middle">My Demo Shop</h1>
      </div>
      <div>
      <Product title={items[0].title} price={items[0].price} desc={items[0].description}></Product>
      <Product title={items[1].title} price={items[1].price} desc={items[1].description}></Product>
      </div>
    </div>
  )
}

export default App;
