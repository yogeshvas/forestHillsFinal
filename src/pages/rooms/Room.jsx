import React, { useState } from "react";
import NavbarPc from "../../components/Navbar/NavbarPc";
import NavbarPhone from "../../components/Navbar/NavbarPhone";
import Nav from "./Nav";
import Family from "./Family";
import Couples from "./Couples";
import Friends from "./Friends";

const Room = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div>
      <NavbarPc />
      <NavbarPhone />
      <Nav setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      {selectedTab == 3 ? (
        <Couples />
      ) : selectedTab == 2 ? (
        <Friends />
      ) : (
        <Family />
      )}
    </div>
  );
};

export default Room;
