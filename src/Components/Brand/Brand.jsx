import Swal from "sweetalert2";

const Brand = () => {
  const handelBrand = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const logo = form.logo.value;
    const image = form.image.value;
    const info = form.info.value;
    // console.log(name, logo, image, info);
    const brandInfo = { name, logo, image, info };
    // console.log(brandInfo);
    fetch("https://assignment-10-automotive-server-side.vercel.app/brand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Brand added is  successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl text-center mt-10 mb-10">Brand Information</h2>
      <form onSubmit={handelBrand}>
        <div className="flex  mb-5">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Name"
                name="name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-4">
            <label className="label">
              <span className="label-text">Brand Logo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Logo"
                name="logo"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex  mb-5">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Image"
                name="image"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-4">
            <label className="label">
              <span className="label-text">Brand Info</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Info"
                name="info"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add to Database"
          className=" border-2 border-[#331A15]   block     w-full  px-2 text-center p-2 rounded-lg text-lg font-bold bg-[#67b1b3]"
        />
      </form>
    </div>
  );
};

export default Brand;
