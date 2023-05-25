import { Helmet } from "react-helmet-async";
import image from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant / our menu</title>
      </Helmet>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[600px] bg-[#15151599] p-10 px-10">
            <h1 className="mb-5 text-5xl font-bold uppercase">OUR MENU</h1>
            <p className="mb-5">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
      <SectionTitle
        subHeading={"---Do not miss---"}
        heading={"TO DAYS OFFER"}
      />
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title="dessert"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
    </div>
  );
};

export default Menu;
