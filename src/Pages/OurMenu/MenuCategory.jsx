import { Link } from "react-router-dom";
import CoverImage from "../Shared/CoverMenu&pages/CoverImage";
import MenuItems from "../Shared/menuItems/MenuItems";

const MenuCategory = ({ items, title, img, subTitle }) => {
  
  return (
    <div className="pt-10">
      {title && (
        <CoverImage img={img} title={title} subTitle={subTitle}></CoverImage>
      )}
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12 mt-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline  border-b-4 border-0">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
