import {  useParams } from "react-router-dom";
import AppleCard from "./AppleCard";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo/Logo";

const Apple = () => {
  // const brands = useLoaderData();
  const { brandname } = useParams();
  // console.log(brands);
  // const appleProducts = brands.filter((brand) => brand.name === "Apple");
  // console.log(appleProducts);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-automotive-server-side.vercel.app/addProduct")
      .then((response) => response.json())
      .then((data) => {
        const appleProducts = data.filter((p) => p.name === brandname);
        setProduct(appleProducts);
      });
  }, []);
  console.log(product);
  return (
    <div className="bg-base-100">
      <Logo></Logo>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full opacity-50">
          <img src="https://i.ibb.co/pXQCzMj/apple-banner.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full opacity-50">
          <img src="https://i.ibb.co/Q9Gw2pM/samsung.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full opacity-50">
          <img src="https://i.ibb.co/f1rnxGL/walton.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 mb-5 ">
          {product.length == 0 && <h1> no data found </h1>}
          {product.length > 0 && product.map((product) => <AppleCard key={product._id} product={product}></AppleCard>)}
        </div>
        <div
          className="mt-5 mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5
     bg-yellow-200"
        >
          <div className="flex gap-5 border-2 border-red-500 py-10 shadow-lg rounded-lg">
            <img src="https://i.ibb.co/4R0ttqd/delivery-truck.png" alt="" className="w-12 h-10" />
            <div className="mt-2">
              <h2>Free delivery</h2>
              <p>Free Shipping for orders over $20</p>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-red-500 py-10 shadow-lg rounded-lg">
            <img src="https://i.ibb.co/VvbQ349/24-hours-support.png" alt="" className="w-12 h-10" />
            <div className="mt-2">
              <h2>Support 24/7</h2>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-red-500 py-10 shadow-lg rounded-lg">
            <img src="https://i.ibb.co/68TW11z/pay.png" alt="" className="w-12 h-10" />
            <div className="mt-2">
              <h2>Payment</h2>
              <p>Pay with Multiple Credit Cards</p>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-red-500 py-10 shadow-lg rounded-lg">
            <img src="https://i.ibb.co/3TYhbk1/reliability.png" alt="" className="w-12 h-10" />
            <div className="mt-2">
              <h2>Reliable</h2>
              <p>Trusted by 2000+ major brands</p>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-red-500 py-10 shadow-lg rounded-lg">
            <img src="https://i.ibb.co/QNn14yg/high-quality.png" alt="" className="w-12 h-10" />
            <div className="mt-2">
              <h2>Guarantee</h2>
              <p>Within 30 days for an exchange</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;
