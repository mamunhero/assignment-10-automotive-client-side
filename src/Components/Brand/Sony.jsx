import { useLoaderData } from "react-router-dom";

const Sony = () => {
  const brands = useLoaderData();
  const sonyProducts = brands.filter((brand) => brand.name === "Sony");
  console.log(sonyProducts);
  return (
    <div>
      {<h1>This is sony</h1>}
    </div>
  );
};

export default Sony;



