import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Mainlayout  = () => (
  <Container style={{ minHeight: window.innerHeight}}>
    <Header/>
    <Outlet />
  </Container>
);

export default Mainlayout;
