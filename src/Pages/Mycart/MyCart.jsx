import { useEffect, useState } from "react";
import Logo from "../../Components/Header/Logo/Logo";
import { useParams } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(()=>{
    fetch("http://localhost:5000/addToCart")
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[params])
  // console.log(product);
  // const { productname, price,} = product || {}
  return (
    <div>
      <Logo></Logo>
      <h2>Hello World{products.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          products.map(product=> <CartCard key={product._id} product={product} setProducts={setProducts} products={products}></CartCard>)
        }
      </div>
    </div>
  );
};

export default MyCart;

