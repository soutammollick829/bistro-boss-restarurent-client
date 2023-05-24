import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendCard from "../ChefRecommendCard/RecommendCard";


const ChefRecommends = () => {

    const [recommends, setRecommends] = useState([]);

    useEffect(()=>{
        fetch(`menu.json`)
        .then(res => res.json())
        .then(data => {
          const chefRecommends = data.filter(item => item.category === 'salad');
          setRecommends(chefRecommends)
        })
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-6 mt-12 mb-28">
                {
                    recommends.slice(0,6).map(item => <RecommendCard
                    key={item._id}
                    item={item}
                    ></RecommendCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;