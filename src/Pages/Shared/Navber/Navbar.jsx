import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <Link>
        <li className="font-bold hover:text-[#EEFF25] ml-8">
          <a>HOME</a>
        </li>
      </Link>
      <Link>
        <li className="font-bold hover:text-[#EEFF25]">
          <a>CONTACT US</a>
        </li>
      </Link>
      <Link>
        <li className="font-bold hover:text-[#EEFF25]">
          <a>DASHBOARD</a>
        </li>
      </Link>
      <Link>
        <li className="font-bold hover:text-[#EEFF25]">
          <a>OUR MENU</a>
        </li>
      </Link>
      <Link>
        <li className="font-bold hover:text-[#EEFF25]">
          <a>OUR SHOP</a>
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-[#15151580] fixed z-10 text-white h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl inline-block">
          <span className="text-2xl font-extrabold">BISTRO BOSS</span>
          <br></br>
          <span className="uppercase text-base font-semibold">
            R e s t a u r a n t
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
