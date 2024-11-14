import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const DetailPage = lazy(() => import("./Pages/DetailPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
