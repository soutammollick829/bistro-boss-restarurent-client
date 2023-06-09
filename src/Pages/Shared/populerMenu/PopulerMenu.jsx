
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../menuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');
  return (
    <div>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12 mt-12">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-outline  border-b-4 border-0">View Full  Menu</button>
      </div>
      <div className="bg-black max-w-4xl mx-auto text-center h-[200px] py-20 mt-32 mb-32">
        <h2 className="text-white text-5xl font-semibold">Call Us: +88 0192345678910</h2>
      </div>
    </div>
  );
};

export default PopulerMenu;
