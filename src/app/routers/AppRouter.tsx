import { createRoutesFromElements, Route } from "react-router-dom";
import { RootLayout } from "../layout/root";
import { Fallback } from "/src/shared/ui/fallback";
import { HomePage } from "/src/pages/home";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Fallback />}>
      <Route index element={<HomePage />} />
    </Route>
  );
  return <div>AppRouter</div>;
};

export default AppRouter;
