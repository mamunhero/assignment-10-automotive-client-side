import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(()=>{
    fetch(`http://localhost:5000/addProduct/details/${params.id}`)
    .then(response=>response.json())
    .then(data=> setProduct(data))
  },[params.id])
  console.log(product);
  const { name, productname, image, type,  description, price,  rating} = product || {}
  console.log(product);
  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {name}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {productname}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {description}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Price: {price}
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       Add to Cart
      </button>
    </a>
  </div>
</div>
    </div>
  );
};

export default Details;

