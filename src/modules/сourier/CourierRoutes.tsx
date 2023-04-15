import { Route, Routes } from "react-router-dom";
import { CurrentOrder } from "./pages/CurrentOrder";
import { OrdersPage } from "./pages/OrdersPage";

export const CourierRoutes = () => {
  return (
    <Routes>
      <Route index path="" element={<OrdersPage />} />
      <Route path="/order/:id" element={<CurrentOrder />} />
    </Routes>
  );
};
