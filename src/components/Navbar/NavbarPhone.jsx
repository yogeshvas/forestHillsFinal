import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHomeLine } from "react-icons/ri";
import { PiCallBell } from "react-icons/pi";
import { FaBed } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbBed } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";

const NavbarPhone = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      opacity={"85%"}
      position={"absolute"}
      zIndex={1}
      top={"0"}
      display={{ base: "block", sm: "none" }}
    >
      <Button size={"xs"} onClick={onOpen} m={4} color={"var(--darkText)"}>
        <GiHamburgerMenu />
      </Button>
      {/* Drawer Body */}

      <Drawer onClose={onClose} isOpen={isOpen} size={"xs"} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            fontSize={"2rem"}
            fontWeight={800}
            color={"var(--darkText)"}
          >
            Forest Hill
          </DrawerHeader>
          <DrawerBody>
            <Flex marginLeft={"0.5rem"} direction={"column"} gap={"1rem"}>
              <NavLink to={"/"}>
                <Flex
                  fontSize={"1.5rem"}
                  fontWeight={300}
                  color={"var(--darkText)"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                >
                  <MdKeyboardArrowRight />
                  <RiHomeLine />
                  <Text>home</Text>
                </Flex>
              </NavLink>
              {/*  */}
              <NavLink to={"/restaurant"}>
                <Flex
                  fontSize={"1.5rem"}
                  fontWeight={300}
                  color={"var(--darkText)"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                >
                  <MdKeyboardArrowRight />
                  <PiCallBell />
                  <Text>restaurant</Text>
                </Flex>
              </NavLink>
              {/*  */}
              <NavLink to={"/rooms"}>
                <Flex
                  fontSize={"1.5rem"}
                  fontWeight={300}
                  color={"var(--darkText)"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                >
                  <MdKeyboardArrowRight />
                  <TbBed style={{ fontSize: "1.4rem" }} />
                  <Text>rooms</Text>
                </Flex>
              </NavLink>
              {/*  */}
              <NavLink to={"/gallery"}>
                <Flex
                  fontSize={"1.5rem"}
                  fontWeight={300}
                  color={"var(--darkText)"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                >
                  <MdKeyboardArrowRight />
                  <TfiGallery />
                  <Text>gallery</Text>
                </Flex>
              </NavLink>
              <NavLink to={"/about"}>
                <Flex
                  fontSize={"1.5rem"}
                  fontWeight={300}
                  color={"var(--darkText)"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                >
                  <MdKeyboardArrowRight />

                  <Text>about</Text>
                </Flex>
              </NavLink>
            </Flex>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Text>Welcome to Shimla.</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarPhone;
