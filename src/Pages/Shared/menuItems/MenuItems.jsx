const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-2">
      <img className="w-28" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
      <div>
        <h3 className="uppercase text-lg">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;
