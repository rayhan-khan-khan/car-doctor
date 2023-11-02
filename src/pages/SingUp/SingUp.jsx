import { createContext } from "react";
import img from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";

const SingUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSingUp = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        
        console.log(name, email, password);
        
       createUser(email, password)
       .then(result => {
        const user = result.user;
        console.log(user);
       })
       .catch(error => console.log(error))
   }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingUp} className="card-body">
            <h1 className="text-5xl text-center  font-bold">Sing Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="type" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Sing Up" />
              </div>
            
            </form>
            <p className="my-4 text-center">Allready Haven an Account<Link className="text-orange-600 font-bold" to='/login'>Sing Up</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SingUp;