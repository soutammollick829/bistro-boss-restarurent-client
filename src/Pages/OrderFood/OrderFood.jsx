import CoverImage from "../Shared/CoverMenu&pages/CoverImage";
import shopBgImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

import {
  FaConciergeBell,
  FaGlassMartiniAlt,
  FaHamburger,
  FaMortarPestle,
  FaPizzaSlice,
} from "react-icons/fa";
import useMenu from "../../Hooks/useMenu";
import { Helmet } from "react-helmet-async";
import ReactTap from "../../components/ReactTap/ReactTap";
import { useParams } from "react-router-dom";

const OrderFood = () => {
    const categories = ['salad', 'pizza' , 'soup', 'dessert', 'drinks']
    const { category } = useParams();

    const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant / our shop</title>
      </Helmet>
      <div>
        <CoverImage
          img={shopBgImg}
          title={"OUR SHOP"}
          subTitle={"Would you like to try a dish?"}
        ></CoverImage>
      </div>
      <div className="text-center mt-20">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <i className="text-2xl underline text-[#BB8506]">
                <FaConciergeBell className="mx-auto" /> Salad
              </i>
            </Tab>
            <Tab>
              <i className="text-2xl underline text-[#BB8506]">
                <FaPizzaSlice className="mx-auto" />
                Pizza
              </i>
            </Tab>
            <Tab>
              <i className="text-2xl text-[#BB8506] underline">
                <FaMortarPestle className="mx-auto" /> Soups
              </i>
            </Tab>
            <Tab>
              <i className="text-2xl underline text-[#BB8506]">
                <FaHamburger className="mx-auto" /> Desserts
              </i>
            </Tab>
            <Tab>
              <i className="text-2xl text-[#BB8506] underline">
                <FaGlassMartiniAlt className="mx-auto" /> Drinks
              </i>
            </Tab>
          </TabList>
          <TabPanel>
            <ReactTap items={salad}></ReactTap>
          </TabPanel>
          <TabPanel>
            <ReactTap items={pizza}></ReactTap>
          </TabPanel>
          <TabPanel>
            <ReactTap items={soup}></ReactTap>
          </TabPanel>
          <TabPanel>
            <ReactTap items={dessert}></ReactTap>
          </TabPanel>
          <TabPanel>
            <ReactTap items={drinks}></ReactTap>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default OrderFood;
