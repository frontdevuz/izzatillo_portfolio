import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function LayoutWithNavbarIDP() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </>
  );
}
