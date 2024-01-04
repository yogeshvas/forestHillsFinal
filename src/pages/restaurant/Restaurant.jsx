import React, { useEffect, useState } from "react";
import NavbarPc from "../../components/Navbar/NavbarPc";
import NavbarPhone from "../../components/Navbar/NavbarPhone";
import styled from "styled-components";
import Sec1 from "./Sec1";
import { SyncLoader } from "react-spinners";
import { Center, Flex } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";

const Restaurant = () => {
  return (
    <>
      <Main>
        <NavbarPc />
        <NavbarPhone />
        <Sec1 />
        <Footer />
      </Main>
    </>
  );
};

export default Restaurant;
const Main = styled.div``;
