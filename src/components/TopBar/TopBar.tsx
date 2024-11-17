import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TopBarStyles.scss";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed-top">
      <nav style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <div className="main-container">
          <div className="flex-container">
            <div className="flex-center">
              <div className="no-shrink" onClick={() => navigate("/")}>
                <img
                  className="homeicon-element"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                  alt="NETFLIX"
                />
              </div>
              <div className="responsive-element">
                <div className="home-container">
                  <Link to={"/"} className="home-button">
                    Home
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: "auto" }}>
              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-element"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={() => navigate("/search")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
