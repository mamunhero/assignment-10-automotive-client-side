// import { useContext } from "react";
// import { Link, } from "react-router-dom";
// import  { AuthContext } from "../../Provider/AuthProvider";
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Swal from "sweetalert2";
// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const {createUser} = useContext(AuthContext);
//   const handleRegister = event=> {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const terms = form.terms.checked;
//     if (!/^(?=[^A-Z]*$)[a-zA-Z0-9]{6,}$/.test(password)) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue',
//         icon: 'error',
//         confirmButtonText: 'Cool'
//       })
//     } 
//     else{
//       Swal.fire({
//         title: 'Success!',
//         text: 'Do you want to continue',
//         icon: 'success',
//         confirmButtonText: 'Cool'   
//       })
//     }
//     console.log(name, email, password, terms);
//     createUser(email, password)
//     .then(result=> {
//       console.log(result.user);
//     })
//     .catch(error=> {
//       console.log(error);
//     })
//   }
//   return (
//     <div>
//       <form onSubmit={handleRegister}  className="md:w-3/4 lg:w-1/2 mx-auto mt-5 mb-5">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold">Register now!</h1>
//       </div>
//       <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input type="text" placeholder="name" name="name" className="input input-bordered" required />
//         </div>
//       <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="email" name="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <div className="flex justify-center items-center w-full">
//              <input 
//              type={showPassword ? "text" : "password"} 
//              placeholder="password" 
//              name="password" 
//              className="input input-bordered w-full"
//               required />
//              <span onClick={()=>setShowPassword(!showPassword)} className='text-red-500 -ml-10'>
//               {
//                 showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
//               }
//             </span>
//           </div>
//           <div className="mt-4">
//             <input type="checkbox" name="terms" className="mr-5" />
//             <span className="">Accept Our terms and condition</span>
//           </div>
//         </div>
//         <div className="form-control mt-6">
//           <Link>
//             <button className="btn btn-primary w-full">Register</button>
//           </Link>
//         </div>
//       </form>
//       <p className="text-center mt-5 text-2xl mb-5 ">Already Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/login">Please Login</Link></p>
//     </div>
//   );
// };

// export default Register;







import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    if (password.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must contain at least 6 characters',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } 
    
    else if (!/^[^A-Z]*$/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password do not use capital letter',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    else if (!/^[a-zA-Z0-9]*$/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password do not use special  letter',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    else {
      Swal.fire({
        title: 'Success!',
        text: 'Registration Successful',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      console.log(name, email, password, terms);

      createUser(email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto mt-5 mb-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex justify-center items-center w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password" // Added name attribute
              className="input input-bordered w-full"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className='text-red-500 -ml-10'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="mt-4">
            <input type="checkbox" name="terms" className="mr-5" />
            <span className="">Accept Our terms and conditions</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl mb-5">Already Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/login">Please Login</Link></p>
    </div>
  );
};
// (!/^(?=[^A-Z]*$)[a-zA-Z0-9]{6,}$/.test(password))
export default Register;
