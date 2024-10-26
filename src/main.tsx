import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.tsx";
import { HomeScreen } from "./HomeScreen.tsx";
import { GameScreen } from "./GameScreen.tsx";
import { OrgChart } from "./OrgChart.tsx";
import { GlobeDemo } from "./NYCGlobe.tsx";
import SalesPipeline from "./pages/SalesPipeline.tsx";
import DanielTest from "./DanielTest.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/game",
        element: <GameScreen />,
      },
      {
        path: "/orgchart",
        element: <OrgChart />,
      },
      {
        path: "/salespipeline",
        element: <SalesPipeline />,
      },
      {
        path: "/nyc",
        element: <GlobeDemo />,
      },
      {
        path: "/danieltest",
        element: <DanielTest />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
