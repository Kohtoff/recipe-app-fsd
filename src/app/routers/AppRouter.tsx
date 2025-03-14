import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "app/layout/root";
import { Fallback } from "shared/ui/fallback";
import { HomePage } from "pages/home";
import { Recipe } from "pages/recipe";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<Fallback />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/recipe" element={<RootLayout />}>
        <Route path=":id" index element={<Recipe />} />
      </Route>

      <Route path="*" element={<Fallback />} />
    </>
  );

  const router = createBrowserRouter(routers, {});
  return <RouterProvider router={router} />;
};

export default AppRouter;
