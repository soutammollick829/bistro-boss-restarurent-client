import { FaCalendarAlt, FaClipboardList, FaEnvelope, FaHome, FaList, FaMedal, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">

        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-[#D1A054] text-base-content uppercase">
        <h1 className="font-bold text-2xl text-center mb-10">bistro boss <br />
            <span className="font-normal text-base">R e s t a u r a n t</span></h1>
          <li>
            <Link><FaHome/> User Home</Link>
          </li>
          <li>
           <Link><FaCalendarAlt/> reservation</Link>
          </li>
          <li>
           <Link><FaWallet/> payment history</Link>
          </li>
          <li>
           <Link><FaShoppingCart/> my cart</Link>
          </li>
          <li>
           <Link><FaMedal/> add review</Link>
          </li>
          <li>
           <Link><FaClipboardList/> my booking</Link>
          </li>
          <div className="divider">OR</div>
          <li>
           <Link><FaHome/> home</Link>
          </li>
          <li>
           <Link><FaList/> menu</Link>
          </li>
          <li>
           <Link><FaShoppingBag/> shop</Link>
          </li>
          <li>
           <Link><FaEnvelope/> contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
