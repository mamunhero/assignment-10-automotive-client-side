import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SecondNav from "../../Components/Header/Navbar/SecondNav";
import BrandSingleCard from "../../Components/Brand/BrandSingleCard";
const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="">
      <SecondNav></SecondNav>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <Link to={`/brand/${brand.name}`} key={brand._id}>
              <BrandSingleCard brand={brand} />
            </Link>
          ))}
        </div>
      }
      </div>
    </div>
  );
};

export default Home;


