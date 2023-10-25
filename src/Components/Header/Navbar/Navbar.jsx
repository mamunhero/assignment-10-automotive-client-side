import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
// import { useTheme } from '../../../Hooks/useTHeme';

const Navbar = () => {
  // const {changeTheme, mode} = useTheme()
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
    .then(result=> {
      console.log("user logout successfully", result);
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div>
      <div className=''>
        <div className=''>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 hover:bg-white text-lg mr-5" : "text-lg font-normal text-white gap-5 mr-5"}>Home
          </NavLink>
          <NavLink to="/addproduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 py-1 hover:bg-white text-lg mr-5" : "text-lg font-normal text-white mr-5"}>Add Product
          </NavLink>
          <NavLink to="/mycart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-black rounded px-2 py-1 hover:bg-white text-lg mr-5" : "text-lg font-normal text-white mr-5"}>My Cart
          </NavLink>
          <NavLink to="/login">
              {user ? (
                <>
                  <p>{user.displayName}</p>
                  <p>{user.email}</p>
                  <img src={user.photoUrl} alt="" />
                  <button onClick={handleLogout} className='mr-10 text-lg px-2 font-bold inline-block border-2 border-red-500 rounded-lg bg-red-500 text-white'>Sign Out</button>
                </>
              ) : (
                <Link to="/login">
                  <button className='mr-10 text-lg px-2 font-bold inline-block border-2 border-red-500 rounded-lg bg-red-500 text-white'>Login</button>
                </Link>
              )}      
          </NavLink>

          {/* <button onClick={changeTheme}>change {mode === "dark" ? "light" : "dark"} </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
