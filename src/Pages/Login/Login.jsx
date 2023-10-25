import { Link, useNavigate } from 'react-router-dom';
import Logo from './../../Components/Header/Logo/Logo';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {signInUser, singInGoogle} =  useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (email && password) {
      signInUser(email, password)
    .then(result=> {
      console.log(result.user);
      Swal.fire({
        title: 'Good Job!',
        text: 'Login is suceessful',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      form.reset();
      navigate("/");
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Login failed. Please check your email and password.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  } 
}
  const handleGoogleLogin = () => {
    singInGoogle()
    .then(result=> {
      console.log(result);
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div>
      <Logo></Logo>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mt-5 mb-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='flex justify-center items-center'>
            <input 
             type={showPassword ? "text" : "password"}
             placeholder="password" 
             name='password' 
             className="input input-bordered w-full" 
             required />
            <span onClick={()=>setShowPassword(!showPassword)} className='text-red-500 -ml-10'>
              {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
            </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary w-full">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} type='submit' className="btn btn-secondary w-full">Google Login</button>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl mb-5 ">New to this website ? <Link className="text-blue-500 font-bold text-2xl" to="/register">Please Register</Link></p>
      
    </div>
  );
};

export default Login;

