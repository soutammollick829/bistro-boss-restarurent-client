const RecommendCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="card w-72 bg-[#F3F3F3] border">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className=""
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline text-[#BB8506] border-b-4 border-0 hover:bg-[#BB8506] shadow-2xl">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
