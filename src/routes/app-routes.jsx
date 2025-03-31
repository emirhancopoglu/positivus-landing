import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/layout/layout";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}></Route>
      </Routes>
    </>
  );
}
