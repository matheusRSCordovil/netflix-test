import React, { useState } from "react";
import { API } from "../services";
import "./Styles/SearchPageStyles.scss";
import { useNavigate } from "react-router-dom";
import { useDetailContext } from "../Hooks/UseDetailHook";
import useAlert from "../Hooks/AlertHook";

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Search query
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [movies, setMovies] = useState<any[]>([]); // List of movies

  const { setAlert } = useAlert();
  const { setDetails } = useDetailContext();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchMovies = async (searchQuery: string) => {
    if (!searchQuery) return;

    try {
      const response = await API.get(
        `3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchQuery
        )}&language=en-US&page=1&include_adult=false`
      );

      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchMovies(query);
  };

  const handleDetail = (midiaInfo: { id: number }, isTv: boolean) => {
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

  return (
    <div
      style={{
        padding: "2rem",
        paddingTop: "4rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            onChange={handleInputChange}
            type="text"
            className="search-input"
            placeholder="Search for Movie..."
          ></input>
          <button
            // onClick={Search}
            className="input-button"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 items-center text-white mt-auto mb-auto pr-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>{" "}
            Search
          </button>
        </div>
      </form>

      <div className="search-main-container">
        {movies.length ? (
          movies.map((movie) => {
            return (
              <div className="movie-main-container">
                <div
                  className="hover-container"
                  onClick={() => handleDetail(movie, false)}
                >
                  <a className="img-container" title="">
                    <img
                      // onClick={() => handleMoviePopup(movie)}
                      className="tile__img"
                      src={
                        movie.backdrop_path
                          ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                          : "https://i.ytimg.com/vi/Mwf--eGs05U/maxresdefault.jpg"
                      }
                    />
                  </a>
                  <div className="title-container">
                    <a className="title">{movie.name || movie.title}</a>
                    <br></br>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
