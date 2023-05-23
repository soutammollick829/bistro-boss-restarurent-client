import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/footer/Footer";
import Navbar from "../Pages/Shared/Navber/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;