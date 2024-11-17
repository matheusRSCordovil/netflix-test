import React from "react";
import Carousel from "../components/Carousel/Carousel";
const API_KEY = import.meta.env.VITE_API_KEY;

const Home: React.FC = () => {
  return (
    <div style={{ padding: "2rem", paddingTop: "4rem" }}>
      <Carousel
        isTv={false}
        slideTitle={"Popular Movies"}
        url={`3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`}
      />
      <Carousel
        isTv={true}
        slideTitle={"Popular Series"}
        url={`3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`}
      />
      <Carousel
        isTv={false}
        slideTitle={"Horror"}
        url={`3/discover/movie?api_key=${API_KEY}&with_genres=27&page=1`}
      />
      <Carousel
        isTv={false}
        slideTitle={"SciFi"}
        url={`3/discover/movie?api_key=${API_KEY}&with_genres=878&page=1`}
      />
    </div>
  );
};

export default Home;
