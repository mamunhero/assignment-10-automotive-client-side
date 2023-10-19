
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div >
      <div className=''>
      <div className=''>
        <NavLink to="/" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2  hover:bg-white text-lg mr-5 inline-block" : "text-lg font-normal text-white gap-5 mr-5"}>Home</NavLink>
        <NavLink to="add product" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 py-1  hover:bg-white text-lg mr-5" : "text-lg font-normal text-white mr-5"}>Add Product</NavLink>
        <NavLink to="my cart" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 py-1  hover:bg-white text-lg mr-5" : "text-lg font-normal text-white mr-5"}>My Cart</NavLink>
        <NavLink to="my cart" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 py-1  hover:bg-white text-lg mr-5" : "text-lg font-normal text-white mr-5"}>My Cart</NavLink>
        <NavLink to="my cart" className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 py-1  hover:bg-white text-lg mr-5" : "text-lg font-normal text-white mr-5"}>My Cart</NavLink>
        <NavLink><button className='mr-10 text-lg px-2 font-bold inline-block border-2 border-red-500 rounded-lg bg-red-500 text-white'>Login</button></NavLink>
      </div>
      </div>
    </div>
  );
};

export default Navbar;

