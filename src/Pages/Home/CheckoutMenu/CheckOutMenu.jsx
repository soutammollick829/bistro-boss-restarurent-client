import featuredBgImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CheckOutMenu = () => {
  return (
    <div
      className="h-[550px] relative w-full mx-auto bg-fixed"
      style={{
        backgroundImage: `url(${featuredBgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-8 top-8 w-full">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
      </div>
      <div className="flex absolute left-20 top-60 gap-12 justify-center items-center">
        <img className="w-[400px] opacity-100" src={featuredBgImg} alt="" />
        <div className="text-white w-1/2">
            <p className="font-medium">March 20, 2023</p>
            <h2 className="font-bold">WHERE CAN I GET SOME?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime temporibus voluptatem debitis alias repudiandae ea ad ab aperiam, quo facere ipsa iste quam odio soluta accusamus blanditiis beatae natus placeat eligendi eum optio fugit? At ipsum perspiciatis ad quidem nostrum.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutMenu;
