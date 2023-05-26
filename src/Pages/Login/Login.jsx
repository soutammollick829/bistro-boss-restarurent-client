import loginImg from "../../assets/others/authentication2.png";
import loginCover from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${loginCover}")` }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2">
              <img src={loginImg} alt="image" />
            </div>
            <div className="w-1/2 max-w-sm">
              <h2 className="text-center text-4xl font-bold">Login please</h2>
              <form className="card-body">
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
                  <br />
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-0 rounded-none bg-[#D1A054B2] hover:bg-orange-300">
                    Sign in
                  </button>
                </div>
              </form>
                <div className="text-center">
                  <h2 className="text-[#D1A054] mt-4">
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
