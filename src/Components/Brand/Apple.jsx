import { useLoaderData, useParams } from "react-router-dom";
import AppleCard from "./AppleCard";
import { useEffect, useState } from "react";

const Apple = () => {
  // const brands = useLoaderData();
  const {brandname} = useParams()
  // console.log(brands);
  // const appleProducts = brands.filter((brand) => brand.name === "Apple");
  // console.log(appleProducts);
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/addProduct")
    .then(response=>response.json())
    .then(data=> {
      const appleProducts = data.filter((p) => p.name === brandname);
      setProduct(appleProducts)
    })
  },[])
  console.log(product);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 mb-5">
       
      {
        product.map(product=> <AppleCard key={product._id} product={product}></AppleCard>)
      }
     
    </div>
  );
};



export default Apple;

