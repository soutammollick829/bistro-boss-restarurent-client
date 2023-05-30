import loginImg from "../../assets/others/authentication2.png";
import loginCover from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Login = () => {

  const [disable, setDisable] = useState(true);

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handelLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);

    signIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset('');
      if(user){
        Swal.fire(
          'Good job!',
          'Login successfully!',
          'success'
        )
      }
      navigate(from,{replace:true})
    })
    .then(error =>{
      console.error(error);
    })

  }

  const handelValidationCaptcha = (event)=>{
    const user_captcha_value = event.target.value;
    if(validateCaptcha(user_captcha_value)){
      setDisable(false);
    }
    else{
      setDisable(true);
    }
  }

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${loginCover}")` }}
    >
      <Helmet>
        <title>Bistro Boss Restaurant / Login</title>
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-full">
              <img src={loginImg} alt="image" />
            </div>
            <div className="w-1/2 max-w-sm">
              <h2 className="text-center text-3xl font-bold">Login please</h2>
              <form onSubmit={handelLogin} className="card-body">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                  <LoadCanvasTemplate />
                  </label>
                  <input onBlur={handelValidationCaptcha} 
                    type="text"
                    name="captcha"
                    placeholder="type the captcha"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-4">
                  <button disabled={disable} className="btn border-0 rounded-none bg-[#D1A054B2] hover:bg-orange-300">
                    Sign in
                  </button>
                </div>
              </form>
                <div className="text-center">
                  <h2 className="text-[#D1A054]">
                    New here? <Link to="/signUp">Create a New Account</Link>
                  </h2>
                  <h2 className="font-semibold mt-3">Or sign in with</h2>
                  <div className="flex justify-center gap-8 mt-5">
                    <FaFacebook className="text-3xl"/> <FaGoogle className="text-3xl"/> <FaGithub className="text-3xl"/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
