import Swal from "sweetalert2";

const CartCard = ({ products, setProducts, product }) => {
  console.log(product);
  const { _id, productname, price, image, description } = product;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-automotive-server-side.vercel.app/addToCart/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your product has been deleted.", "success");
              const remaining = products.filter((pro) => pro._id != _id);
              setProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="mt-10 mb-10">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={image} alt="img-blur-shadow" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            {productname}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{description}</p>
          <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">{price}</p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() => handleDelete(_id)}
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
