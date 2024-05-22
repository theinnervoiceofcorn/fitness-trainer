import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage, Offer, PrivacyPolicy, ProgramPage } from "./pages";
import { useNoHoverOnTouchDevices } from "./utils/use-no-hover";

export const App = () => {
  useNoHoverOnTouchDevices();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/program",
      element: <ProgramPage />,
    },
    {
      path: "/offer",
      element: <Offer />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return <RouterProvider router={router} />;
};
