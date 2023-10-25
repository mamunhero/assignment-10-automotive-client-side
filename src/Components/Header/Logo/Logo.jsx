import logo from "../../../../src/assets/assignmemt-10-logo-logo-removebg-preview (1).png"
import Navbar from "../Navbar/Navbar";
const Logo = () => {
  return (
    <div className=" bg-[#67b1b3]">
      <div className="flex flex-col md:flex-row justify-between items-center p-3 max-w-7xl mx-auto ">
        <div className="flex items-center">
          <img src=" https://i.ibb.co/rMwNJdY/assignmemt-10-logo-logo-removebg-preview-1.png" alt="logo" className="w-16 h-10 object-cover" />
          <p className="text-xl font-bold text-red-400">Electroni<span className="text-white">Tech</span></p>
        </div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Logo;