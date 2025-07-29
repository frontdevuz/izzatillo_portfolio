import React from "react";
import NavbarID from "./Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutWithNavbarLS() {
  return (
    <React.Fragment>
      <NavbarID />
      <Outlet />
    </React.Fragment>
  );
}
