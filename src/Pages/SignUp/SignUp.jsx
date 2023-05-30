import { Link, useNavigate } from 'react-router-dom';
import singUpImg from '../../assets/others/authentication.gif';
import signUpCover from '../../assets/others/authentication.png'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const handelSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name);
        if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be 6 charter!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset('');
            if(user){
                Swal.fire(
                    'Sign up successfully',
                    'welcome to bistro boss restarurent',
                    'success'
                  ) 
            }
            navigate('/');
        })
        .then(error =>{
            console.error(error);
        })
    }
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${signUpCover}")` }}
    >
      <Helmet>
        <title>Bistro Boss Restaurant /Sign up</title>
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-full">
              <img src={singUpImg} alt="image" />
            </div>
            <div className="w-1/2 max-w-sm">
              <h2 className="text-center text-3xl font-bold">Sign Up</h2>
              <form onSubmit={handelSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                
                <div className="form-control mt-4">
                  <button
                    className="btn border-0 rounded-none bg-[#D1A054B2] hover:bg-orange-300"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <h2 className="text-[#D1A054]">
                Already registered?<Link to="/login"> Go to log in</Link>
                </h2>
                <h2 className="font-semibold mt-3">Or sign up with</h2>
                <div className="flex justify-center gap-8 mt-5">
                  <FaFacebook className="text-3xl" />{" "}
                  <FaGoogle className="text-3xl" />{" "}
                  <FaGithub className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
