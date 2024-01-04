// Home.jsx
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import NavbarPc from "../../components/Navbar/NavbarPc";
import NavbarPhone from "../../components/Navbar/NavbarPhone";
import Description from "./Description";

import { Box, Center, Flex } from "@chakra-ui/react";
import { SyncLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <>
        {loading ? (
          <Flex
            width={"100vw"}
            justifyContent={"center"}
            height={"100vh"}
            alignItems={"center"}
          >
            <Center>
              <SyncLoader color="var(--darkText)" />
            </Center>
          </Flex>
        ) : (
          <>
            {" "}
            <NavbarPc />
            <NavbarPhone />
            <Carousel style={{ position: "relative", zIndex: "0" }} />
            <Description />
          </>
        )}
      </>
    </div>
  );
};

export default Home;
