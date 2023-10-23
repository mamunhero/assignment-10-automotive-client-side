
import { Link } from 'react-router-dom';
import Logo from './../../Components/Header/Logo/Logo';
const Login = () => {
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <Link>
            <button className="btn btn-primary w-full">Login</button>
          </Link>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl mb-5 ">Do,not Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/register">Register</Link></p>
    </div>
  );
};

export default Login;


