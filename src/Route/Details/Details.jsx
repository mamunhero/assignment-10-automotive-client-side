import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(()=>{
    fetch(`http://localhost:5000/addProduct/${params.id}`)
    .then(response=>response.json())
    .then(data=> setProduct(data))
  },[params.id])
  console.log(product);
  const { name, productname, image, type, price,  rating} = product || {}
  console.log(product);
  return (
    <div>
      <h2>This is home: {productname}</h2>
    </div>
  );
};

export default Details;