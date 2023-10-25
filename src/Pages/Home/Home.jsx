import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SecondNav from "../../Components/Header/Navbar/SecondNav";
import BrandSingleCard from "../../Components/Brand/BrandSingleCard";
import ServiceCard from "../../Components/ServiceCard";
import About from "../../Components/About";
const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="">
      <SecondNav></SecondNav>
      <Header></Header>
      <div className="">
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
      <div className="bg-[#C8E8E0] mt-10 mb-10 h-screen">
        <div className="text-center mt-5 mb-5">
          <h2 className="text-[#2E937A] md:text-3xl  font-bold mt-5 mb-5">Our Features & Services.</h2>
          <ServiceCard></ServiceCard>
        </div>
      </div>
      <div className=" bg-[#E5E5E5] mt-10 mb-10 h-[50vh]">
        <About></About>
      </div>
    </div>
  );
};

export default Home;


