import React from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};
