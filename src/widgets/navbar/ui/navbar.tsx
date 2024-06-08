import React from "react";
import { Link } from "react-router-dom";
import { NAV_TABS } from "../model";
import { Logo } from "@/shared/ui";
import "./navbar.scss";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Logo logo="ProjectName" />
      <ul>
        {NAV_TABS.map((tab) => (
          <li>
            <Link to={tab.path}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
