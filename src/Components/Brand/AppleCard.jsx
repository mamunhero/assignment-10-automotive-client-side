import { Link } from "react-router-dom";

const AppleCard = ({product}) => {
  const {_id, name, productname, image, type, price, description, rating} = product || {}
  // console.log(product);
  return (
    <div>
      <div>
        <h2>Hello world</h2>
      </div>
      <div>
      <div className="card   bg-gray-100 w-full h-full shadow-xl">
  <figure><img src={image} alt="Shoes" className="w-96 h-96" /></figure>
  <div className="card-body">
    <h2 className="card-title">Brand Name: {name}</h2>
    <h2 className="card-title">Product Name: {productname}</h2>
    <p className="text-red-500"> {description}</p>
    <div className="flex gap-5 font-bold">
      <span>Price: {price}</span>
      <span>Type: {type}</span>
    </div>
    <span>Rating: {rating}</span>
    <div className="flex justify-between items-center">
     <Link to={`/details/${_id}`}>
        <button className="btn btn-primary">Details button</button>
     </Link>
     <Link to={`/update/${_id}`}>
        <button className="btn btn-primary">Update button</button>
     </Link>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default AppleCard;

