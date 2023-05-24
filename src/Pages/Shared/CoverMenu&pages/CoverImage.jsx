const CoverImage = ({img, title, subTitle}) => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[600px] bg-[#15151599] p-10 px-10">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
