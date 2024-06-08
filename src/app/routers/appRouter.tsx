import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage, ProgramPage, Offer, PrivacyPolicy } from "@/pages";

export const AppRouter: React.FC = () => {
  const appRouterConfig = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/program/:id",
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

  return <RouterProvider router={appRouterConfig} />;
};
