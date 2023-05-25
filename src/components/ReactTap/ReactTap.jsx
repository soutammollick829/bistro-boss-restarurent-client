import FoodCard from "../../Pages/OrderFood/FoodCard/FoodCard";


const ReactTap = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
            {
                items.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default ReactTap;