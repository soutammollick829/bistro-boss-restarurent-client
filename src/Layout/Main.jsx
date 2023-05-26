import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/footer/Footer";
import Navbar from "../Pages/Shared/Navber/Navbar";

const Main = () => {
    const location = useLocation();
    const isLoading = location.pathname.includes('login');
    return (
        <div>
            {isLoading || <Navbar/>}
            <Outlet/>
            {isLoading || <Footer/>}
        </div>
    );
};

export default Main;