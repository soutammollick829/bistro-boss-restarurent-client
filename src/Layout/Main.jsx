import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/footer/Footer";

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;