import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store";

interface IProviders {
  children: JSX.Element;
}

export const AppProviders: React.FC<IProviders> = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
};
