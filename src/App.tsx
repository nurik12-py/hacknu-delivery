import { Route, Routes } from "react-router-dom";
import { ClinetRoutes } from "./modules/client/ClinetRoutes";
import { GovRoutes } from "./modules/gov/GovRoutes";
import { CourierRoutes } from "./modules/сourier/CourierRoutes";

export const App = () => {
  return (
    <Routes>
      <Route index path="/client/*" element={<ClinetRoutes />} />
      <Route path="/gov/*" element={<GovRoutes />} />
      <Route path="/сourier/*" element={<CourierRoutes />} />
    </Routes>
  );
};
