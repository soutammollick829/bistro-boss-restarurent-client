const FoodCard = ({ item }) => {
  const {name,image,recipe,price} = item;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-black text-white font-semibold absolute right-0 mt-4 mr-4 p-1 rounded-s-2xl">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mx-auto">
          <button className="btn btn-outline text-[#BB8506] border-b-4 border-0 hover:bg-[#BB8506] shadow-2xl">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
