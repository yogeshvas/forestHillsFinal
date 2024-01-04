import React from "react";
import styled from "styled-components";

// Font Import
import { RiHomeLine } from "react-icons/ri";
import { PiCallBell } from "react-icons/pi";
import { FaBed } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { TbBed } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
const NavbarPc = () => {
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Main>
        <ul className="navbar">
          <li>
            <NavLink to="/">
              <RiHomeLine />
              <Text>home</Text>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/restaurant"}>
              <PiCallBell /> restaurant
            </NavLink>
          </li>
          <li>
            <NavLink to={"/rooms"}>
              {/* <FaBed /> */}
              <TbBed style={{ fontSize: "1.4rem" }} />
              rooms
            </NavLink>
          </li>
          <li>
            <NavLink to={"/gallery"}>
              <TfiGallery />
              gallery
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}> about</NavLink>
          </li>
        </ul>
      </Main>
    </Box>
  );
};

export default NavbarPc;

const Main = styled.div`
  position: absolute;
  z-index: 100;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--lightBg);
  justify-content: center; /* Center horizontally */
  top: 1.5rem;
  width: 50%;
  left: 25%;
  opacity: 85%;
  color: var(--darkText);

  .navbar {
    display: flex;
    gap: 3rem;
    font-size: 1.05rem;
    list-style: none;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      border-bottom: 1px solid transparent; /* Set initial border color to transparent */
      align-items: center;
      gap: 1rem;
      display: flex;
      transition: border-bottom 0.3s ease; /* Apply transition to border-bottom property */
    }

    li:hover {
      border-bottom: 1px solid var(--darkText); /* Change border color on hover */
    }
  }

  a {
    align-items: center;
    display: flex;
    gap: 0.7rem;
    transition: all 0.1s ease-in-out;
    transform-origin: left center; /* Set the transform origin to left center for scaling from left to right */
  }

  a:hover {
    transform: scaleX(1); /* Scale horizontally on hover */
  }
  .active {
    border-bottom: 1px solid var(--darkText);
  }
`;
