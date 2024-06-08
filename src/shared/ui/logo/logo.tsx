import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ILogo {
  logo: string | ReactNode;
}

export const Logo: React.FC<ILogo> = (props) => {
  const { logo } = props;

  return (
    <NavLink to="/main" className="logo">
      {logo}
    </NavLink>
  );
};
