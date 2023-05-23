import PopulerMenu from "../../Shared/populerMenu/PopulerMenu";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import CategoryFood from "../Category/CategoryFood";

const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryFood/>
            <AboutBistro/>
            <PopulerMenu/>
        </div>
    );
};

export default Home;