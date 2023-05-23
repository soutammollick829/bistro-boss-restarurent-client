
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import foodSlider1 from '../../../assets/home/slide1.jpg';
import foodSlider2 from '../../../assets/home/slide2.jpg';
import foodSlider3 from '../../../assets/home/slide3.jpg';
import foodSlider4 from '../../../assets/home/slide4.jpg';
import foodSlider5 from '../../../assets/home/slide5.jpg';

const CategoryFood = () => {
  return (
    <div>
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <img src={foodSlider1} alt="" />
            <h2 className="uppercase text-3xl text-white text-center -mt-16">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={foodSlider2} alt="" />
            <h2 className="uppercase text-3xl text-white text-center -mt-16">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={foodSlider3} alt="" />
            <h2 className="uppercase text-3xl text-white text-center -mt-16">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={foodSlider4} alt="" />
            <h2 className="uppercase text-3xl text-white text-center -mt-16">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={foodSlider5} alt="" />
            <h2 className="uppercase text-3xl text-white text-center -mt-16">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryFood;
