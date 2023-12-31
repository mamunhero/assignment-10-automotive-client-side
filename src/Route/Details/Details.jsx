import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../Components/Header/Logo/Logo";
import Swal from "sweetalert2";

const Details = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const addToCart = () => {
    const cart = {
      productname: product.productname,
      price: product.price,
      image: product.image,
      description: product.description,
    };
    console.log(cart);
    fetch("https://assignment-10-automotive-server-side.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added is  successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  useEffect(() => {
    fetch(`https://assignment-10-automotive-server-side.vercel.app/addProduct/details/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id]);
  // console.log(product);
  const { name, productname, image, type, description, price, rating } = product || {};
  // console.log(product);
  return (
    <div>
      <Logo></Logo>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-5 mb-5 md:mx-auto">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={image} alt="image" className="object-cover w-full h-full" />
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
              onClick={addToCart}
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
