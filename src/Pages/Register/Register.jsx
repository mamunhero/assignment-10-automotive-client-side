import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = event=> {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  }
  return (
    <div>
      <form onSubmit={handleRegister}  className="md:w-3/4 lg:w-1/2 mx-auto mt-5 mb-5">
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
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl mb-5 ">Already Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/login">Login</Link></p>
    </div>
  );
};

export default Register;

