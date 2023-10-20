import { useLoaderData } from "react-router-dom";

const Apple = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
};

export default Apple;
