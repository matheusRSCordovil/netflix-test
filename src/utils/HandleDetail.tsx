import { useNavigate } from "react-router-dom"; // Adjust according to your router setup
import { API } from "../services";
import useAlert from "../Hooks/AlertHook";
import { useDetailContext } from "../Hooks/UseDetailHook";
const API_KEY = import.meta.env.VITE_API_KEY;

interface MidiaInfo {
  id: number;
}

export const useHandleDetail = () => {
  const navigate = useNavigate();
  const { setAlert } = useAlert();
  const { setDetails } = useDetailContext();

  const handleDetail = (midiaInfo: MidiaInfo, isTv: boolean) => {
    API.get(
      `3/${isTv ? "tv" : "movie"}/${
        midiaInfo.id
      }?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => {
        console.log(response.data);

        setDetails({
          title: response.data.title ?? response.data.original_name,
          releaseDate:
            response.data.release_date ?? response.data.first_air_date,
          rating: response.data.vote_average,
          description: response.data.overview,
          posterPath: response.data.poster_path,
        });

        navigate("/detail");
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setAlert("Failed to fetch movie details", "error");
      });
  };

  return handleDetail;
};
