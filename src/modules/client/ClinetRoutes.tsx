import { Route, Routes } from "react-router-dom";
import StepsPage from "./pages/StepsPage";
import { IINCheckPage } from "./pages/IINCheckPage";

export const ClinetRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<IINCheckPage />} />
      <Route path="/steps" element={<StepsPage />} />
    </Routes>
  );
};
