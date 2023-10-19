import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SecondNav from "../../Components/Header/Navbar/SecondNav";
import BrandSingleCard from "../../Components/Brand/BrandSingleCard";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <SecondNav></SecondNav>
      <Header></Header>
      {
        brands.map(brand=> <BrandSingleCard key={brand._id} brand={brand} brand={brand}></BrandSingleCard>)
      }
    </div>
  );
};

export default Home;