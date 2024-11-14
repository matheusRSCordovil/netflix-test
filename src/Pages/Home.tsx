import React, { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import { API } from "../services";
import useAlert from "../Hooks/AlertHook";
const apiKey = import.meta.env.VITE_API_KEY;

const Home: React.FC = () => {
  const { setAlert } = useAlert();

  useEffect(() => {
    API.get(`/3/discover/movie?api_key=${apiKey}&with_genres=27&page=1`)
      .then((response) => {
        console.log(response.data.results);
        setAlert("Movies fetched successfully", "success");
      })
      .catch((error) => {
        console.error(error);
        setAlert("Failed to fetch movies", "error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Carousel images={[]} />
      <Carousel images={[]} />
    </div>
  );
};

export default Home;
