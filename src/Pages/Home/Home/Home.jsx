import PopulerMenu from "../../Shared/populerMenu/PopulerMenu";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import ChefRecommends from "../CHEF RECOMMENDS/ChefRecommends";
import CategoryFood from "../Category/CategoryFood";

const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryFood/>
            <AboutBistro/>
            <PopulerMenu/>
            <ChefRecommends/>
        </div>
    );
};

export default Home;