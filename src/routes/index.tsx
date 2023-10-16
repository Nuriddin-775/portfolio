import { Route, Routes } from "react-router-dom";
import HomePage from "src/pages/home";
// import HomePage from "../pages/home/index";

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default RoutElements;
