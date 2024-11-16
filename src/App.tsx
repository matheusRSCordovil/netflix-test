import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";
import Navbar from "./components/TopBar/TopBar";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import ErrorPage from "./Pages/ErrorPage";
import DetailPage from "./Pages/DetailPage";
import PlayPage from "./Pages/PlayPage";

function App() {
  return (
    <>
      <Navbar />
      <ErrorPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
