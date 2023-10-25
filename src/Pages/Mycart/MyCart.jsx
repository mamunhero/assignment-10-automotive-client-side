import { useEffect, useState } from "react";
import Logo from "../../Components/Header/Logo/Logo";
import { useParams } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch("https://assignment-10-automotive-server-side.vercel.app/addToCart")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [params]);
  // console.log(product);
  // const { productname, price,} = product || {}
  return (
    <div>
      <Logo></Logo>
      <h2 className="text-center text-red-400 md:text-4xl mt-5 mb-5">Product Added Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <CartCard key={product._id} product={product} setProducts={setProducts} products={products}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
