import { useLoaderData, useParams } from "react-router-dom";
import AppleCard from "./AppleCard";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo/Logo";

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

    <div className="bg-base-100">
      <Logo></Logo>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full opacity-50">
  
    <img src="https://i.ibb.co/pXQCzMj/apple-banner.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full opacity-50">
    <img src="https://i.ibb.co/Q9Gw2pM/samsung.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full opacity-50">
    <img src="https://i.ibb.co/f1rnxGL/walton.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 mb-5 ">
       
       {
         product.map(product=> <AppleCard key={product._id} product={product}></AppleCard>)
       }
      
     </div>
     <h2>Hello</h2>
      </div>
     
    </div>
  );
};



export default Apple;

