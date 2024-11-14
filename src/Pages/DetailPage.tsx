import React from "react";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const movie = {
    id,
    title: "Movie Title",
    description: "This is a detailed description of the movie.",
    releaseDate: "2023-01-01",
    rating: 8.5,
    posterUrl: "https://via.placeholder.com/300x450",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        style={{ width: "300px", height: "450px" }}
      />
      <p>
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>{movie.description}</p>
    </div>
  );
};

export default DetailPage;
