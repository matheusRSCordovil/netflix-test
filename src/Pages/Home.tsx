import React from "react";
import Carousel from "../components/Carousel/Carousel";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Carousel images={[]} />
      <Carousel images={[]} />
    </div>
  );
};

export default Home;
