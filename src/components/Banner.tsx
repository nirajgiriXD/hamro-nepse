import bannerImage from "../assets/img5.png";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col justify-center md:py-12 md:w-1/2">
            <p className="py-2 mt-10 text-xl md:text-2xl lg:text-4xl text-blue-500 font-medium">
              Start to Success
            </p>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold md:mb-2 text-gray-800">
              Invest Wisely
              <br /> <span className="text-blue-500">Analyze Thoroughly</span>
              <br />
              Your Stock Companion
            </h1>
          </div>
          <div className="md:w-1/2 ">
            <img src={bannerImage} className="w-full" alt="Banner Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
