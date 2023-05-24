import { Helmet } from "react-helmet-async";
import PopulerMenu from "../../Shared/populerMenu/PopulerMenu";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import ChefRecommends from "../CHEF RECOMMENDS/ChefRecommends";
import CategoryFood from "../Category/CategoryFood";
import CheckOutMenu from "../CheckoutMenu/CheckOutMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant / Home</title>
      </Helmet>
      <Banner />
      <CategoryFood />
      <AboutBistro />
      <PopulerMenu />
      <ChefRecommends />
      <CheckOutMenu />
    </div>
  );
};

export default Home;
