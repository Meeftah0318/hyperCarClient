import React from "react";
import Banner from "./Banner/Banner";
import BannerCars from "./BannerCars/BannerCars";
import BrandCollection from "./BrandCollection/BrandCollection";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerCars></BannerCars>
      <Reviews></Reviews>
      <BrandCollection></BrandCollection>
    </div>
  );
};

export default Home;
