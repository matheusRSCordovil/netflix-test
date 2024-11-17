import React, { useEffect } from "react";
import { useDetailContext } from "../Hooks/UseDetailHook";
import { useNavigate } from "react-router-dom";
import "./Styles/DetailPageStyles.scss";

const DetailPage: React.FC = () => {
  const { details } = useDetailContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Details updated:", details);
  }, [details]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "2rem", paddingTop: "4rem" }}>
      <h1>{details.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${details.posterPath}`}
        alt={details.title}
        style={{ width: "300px", height: "450px" }}
      />
      <p>
        <strong>Release Date:</strong> {details.releaseDate}
      </p>
      <p>
        <strong>Rating:</strong> {details.rating}
      </p>
      <p>{details.description}</p>

      <button className="button-play" onClick={() => navigate("/play")}>
        <span className="arrow"></span>
        <label className="label">play</label>
      </button>
    </div>
  );
};

export default DetailPage;
