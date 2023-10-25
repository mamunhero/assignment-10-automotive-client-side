import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../Components/Header/Logo/Logo";
import Swal from "sweetalert2";

const Update = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`https://assignment-10-automotive-server-side.vercel.app/addProduct/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id]);
  // console.log(product);
  const { name, productname, image, type, price, rating } = product || {};
  console.log(product);
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const productname = form.productname.value;
    const image = form.image.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    console.log(name, productname, image, type, price, rating);
    const updatedProduct = { name, productname, image, type, price, rating };
    console.log(updatedProduct);
    fetch(`https://assignment-10-automotive-server-side.vercel.app/addProduct/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product added is  successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          // Reset  form
          form.reset();
        }
      });
  };
  return (
    <div className=" bg-gray-300">
      <Logo></Logo>
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-3xl p-5 font-semibold ">
          ElectroniTech is an innovative electronics company specializing in cutting-edge technology solutions. They
          design and produce electronic devices, from consumer gadgets to industrial applications, with a focus on
          quality and innovation.
        </h2>
        <div>
          <div className="">
            <h2 className="text-5xl text-center text-[#67b1b3] font-bold">Update Product {productname} </h2>
            <form onSubmit={handleUpdateProduct}>
              <div className="p-10">
                <div className="flex  mb-5">
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Brand Name"
                        defaultValue={name}
                        name="name"
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Product Name"
                        defaultValue={productname}
                        name="productname"
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex  mb-5">
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Product Image"
                        defaultValue={image}
                        name="image"
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                      <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Type"
                        name="type"
                        defaultValue={type}
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex  mb-5">
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Price"
                        defaultValue={price}
                        name="price"
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Rating"
                        defaultValue={rating}
                        name="rating"
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Update"
                  className=" border-2 border-[#331A15]   block     w-full ml-4 px-2 text-center p-2 rounded-lg text-lg font-bold bg-[#67b1b3]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
