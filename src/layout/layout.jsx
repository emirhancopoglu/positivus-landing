import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import Container from "@/utils/container/container";
import Footer from "@/components/footer/footer";

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
