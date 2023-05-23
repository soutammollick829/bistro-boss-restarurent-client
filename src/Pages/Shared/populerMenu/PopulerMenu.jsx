import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../menuItems/MenuItems";


const PopulerMenu = () => {
    const [menu , setMenu] = useState([]);
    useEffect(()=>{
        fetch(`menu.json`)
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12 mt-12">
                {
                    menu.map(item => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopulerMenu;