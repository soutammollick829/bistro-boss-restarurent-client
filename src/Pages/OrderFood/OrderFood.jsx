import CoverImage from "../Shared/CoverMenu&pages/CoverImage";
import shopBgImg from '../../assets/shop/banner2.jpg';

const OrderFood = () => {
    return (
        <div>
            <h2>Order food page</h2>
            <CoverImage img={shopBgImg} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></CoverImage>
        </div>
    );
};

export default OrderFood;