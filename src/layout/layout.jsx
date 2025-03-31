import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Container from "../utils/container/container";

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
}
