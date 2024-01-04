// Description.jsx
import { Box, Button, Card, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { PiMapPinBold } from "react-icons/pi";
import { RiGasStationLine } from "react-icons/ri";
import { MdOutlineDirectionsBusFilled } from "react-icons/md";
import { TiPlaneOutline } from "react-icons/ti";
import { TbChefHat } from "react-icons/tb";
import { PiCallBellBold } from "react-icons/pi";
import { FaList } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { TbTelescope } from "react-icons/tb";

import CardHome from "./card/CardHome";
import Footer from "../../components/Footer/Footer";

import img1 from "../../assets/homes/1.jpeg";
import img2 from "../../assets/homes/2.jpeg";
import img3 from "../../assets/homes/3.jpeg";
import { NavLink } from "react-router-dom";

const Description = () => {
  return (
    <>
      <Box
        paddingX={{ base: "1.5rem", sm: "8rem" }}
        position="relative"
        zIndex="1"
        marginTop={"-1rem"}
        borderTopRadius={"1rem"}
        paddingTop={"3rem"}
        backgroundColor={"var(--darkBg)"}
        paddingBottom={"6rem"}
      >
        <Box marginTop={"1rem"}>
          <Box>
            <Text
              fontSize={{ base: "1rem", sm: "2rem" }}
              color={"var(--darkText)"}
              fontWeight={"700"}
            >
              What is Forest Hill?
            </Text>
            <Text
              color={"var(--darkText)"}
              marginTop={"0.5rem"}
              fontSize={{ base: "0.7rem", sm: "1.1rem" }}
            >
              Forest Hill, a unique blend of hotel and cottage nestled in the
              scenic outskirts of Shimla amid the breath-taking hills of
              Ghanahatti. Immerse yourself in the unparalleled beauty of nature,
              offering a serene sanctuary to unwind and escape the hustle of
              city life. Discover a tranquil haven that invites you to relax,
              rejuvenate, and embrace the soothing ambiance of this picturesque
              retreat.
            </Text>
          </Box>
          <Box marginTop={{ base: "2rem", sm: "4rem" }}>
            <Text
              fontSize={{ base: "1rem", sm: "2rem" }}
              color={"var(--darkText)"}
              fontWeight={"700"}
            >
              Forest Hill Retreat
            </Text>
            <Text
              color={"var(--darkText)"}
              marginTop={"0.5rem"}
              fontSize={{ base: "0.7rem", sm: "1.1rem" }}
            >
              "Escape to Forest Hill, a serene hotel cum cottage just 12 km from
              Shimla. Nestled in the hills, our haven offers a tranquil retreat
              from city life. Immerse yourself in nature's beauty and savor
              local cuisine for a truly rejuvenating experience. Forest Hill
              Hotel: Where serenity meets mountain hospitality."
            </Text>
          </Box>
        </Box>
        <NavLink to={"/about"}>
          <VStack
            size={"sm"}
            color={"var(--lightText)"}
            backgroundColor={"var(--darkText)"}
            fontSize={{ base: "0.7rem", sm: "1rem" }}
            width={{ base: "25%", sm: "10%" }}
            borderRadius={"0.7rem"}
            marginX={{ base: "1rem", sm: "0rem" }}
            paddingY={"0.5rem"}
            marginTop={"2rem"}
          >
            <Flex gap={2} alignItems={"center"}>
              <TbTelescope />
              <Text> View</Text>
            </Flex>
          </VStack>
        </NavLink>
      </Box>
      <Box
        color={"var(--darkText)"}
        width={"100vw"}
        backgroundColor={"#F4F8F1"}
      >
        <Flex
          paddingX={{ base: "1.5rem", sm: "8rem" }}
          paddingY={{ base: "4rem", sm: "5rem" }}
          justifyContent={"space-between"}
          wrap={"wrap"}
        >
          <Box>
            <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={"700"}>
              Flavours at Forest Hill
            </Text>
            <Flex
              paddingX={{ base: "1rem", sm: "0" }}
              gap={"1rem"}
              marginTop={{ base: "1rem", sm: "2rem" }}
              direction={"column"}
            >
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={{ base: "1rem", sm: "0.5rem" }}
                fontSize={{ base: "0.7rem", sm: "1.1rem" }}
              >
                <TbChefHat />
                Crafting Culinary Magic, Helmed by Our Maestro Chef.
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={{ base: "1rem", sm: "0.5rem" }}
                fontSize={{ base: "0.7rem", sm: "1.1rem" }}
              >
                <PiCallBellBold />
                Global Tastes, Local Flair: A Fusion Feast of Indian, Himachali,
                and Chinese Delights.
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={{ base: "1rem", sm: "0.5rem" }}
                fontSize={{ base: "0.7rem", sm: "1.1rem" }}
              >
                <FaList />
                Savor Simplicity: Order with Ease from a Menu Tailored to Your
                Tastes..
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={{ base: "1rem", sm: "0.5rem" }}
                fontSize={{ base: "0.7rem", sm: "1.1rem" }}
              >
                <GrGallery />
                Nature's Canvas Unveiled: Panoramic Views Through Our Enchanting
                Windows..
              </Text>
              <NavLink to={"/restaurant"}>
                <VStack
                  size={"sm"}
                  color={"var(--lightText)"}
                  backgroundColor={"var(--darkText)"}
                  fontSize={{ base: "0.7rem", sm: "1rem" }}
                  width={{ base: "30%", sm: "20%" }}
                  borderRadius={"0.7rem"}
                  paddingY={"0.5rem"}
                  marginY={"1rem"}
                >
                  <Flex gap={2} paddingX={"2rem"} alignItems={"center"}>
                    <Text> Flavours</Text>
                    <PiCallBellBold />
                  </Flex>
                </VStack>
              </NavLink>
            </Flex>
          </Box>
          <VStack width={{ base: "100vw", sm: "auto" }}>
            <Image marginTop={{ base: "2rem", sm: "0" }} src="/pic1.png" />
          </VStack>
        </Flex>
        <Box marginTop={"2rem"} paddingX={{ base: "1.5rem", sm: "7rem" }}>
          <VStack>
            <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={700}>
              "Roomscape"
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "0.7rem", sm: "1.5rem" }}
            >
              "Five Rooms, Five Worlds: Tailored Experiences Awaits Your Stay."
            </Text>
          </VStack>
          <Flex
            gap={4}
            flexDirection={{ base: "column", sm: "row" }}
            paddingY={"1rem"}
            paddingX={{ base: "", sm: "2rem" }}
            justifyContent={"space-between"}
          >
            <CardHome
              title="Family Room"
              image={img1}
              desc="4 People Occupancy"
              footer="rollaway bed"
              nav={"/rooms"}
            />
            <CardHome
              title="Friends Room"
              image={img2}
              desc="2 People Occupancy"
              footer="rollaway bed"
              nav={"/rooms"}
            />
            <CardHome
              title="Couple Room"
              image={img3}
              desc="2 People Occupancy"
              footer="Balcony View"
              nav={"/rooms"}
            />
          </Flex>
        </Box>
        <Box paddingBottom={"4rem"} paddingX={{ base: "1.5rem", sm: "7rem" }}>
          <Text
            color={"var(--darkText)"}
            marginTop={{ base: "3rem", sm: "4rem" }}
            fontSize={{ base: "1rem", sm: "2.2rem" }}
            fontWeight={"700"}
          >
            Nearest Localities.
          </Text>
          <VStack color={"var(--darkText)"}>
            <Flex
              marginTop={"2rem"}
              paddingX={{ base: "2rem", md: "20rem" }}
              // paddingLeft={{ base: "3rem", md: "30rem" }}
              width={"100vw"}
              justifyContent={"space-between"}
            >
              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <PiMapPinBold />
                  Shimla
                </Flex>
              </Text>

              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                Ghanahatti (Kufridhar) (12km)
              </Text>
            </Flex>
            {/* #2 */}
            <Flex
              marginTop={"0.5rem"}
              paddingX={{ base: "2rem", md: "20rem" }}
              width={"100vw"}
              justifyContent={"space-between"}
            >
              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <TiPlaneOutline />
                  Nearest Airport
                </Flex>
              </Text>

              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                Jubbarhatti (17km)
              </Text>
            </Flex>
            {/*  */}
            <Flex
              marginTop={"0.5rem"}
              paddingX={{ base: "2rem", md: "20rem" }}
              width={"100vw"}
              justifyContent={"space-between"}
            >
              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <RiGasStationLine />
                  Nearest Fuel Station
                </Flex>
              </Text>

              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                Banuti (3.5km)
              </Text>
            </Flex>
            {/*  */}
            <Flex
              marginTop={"0.5rem"}
              paddingX={{ base: "2rem", md: "20rem" }}
              width={"100vw"}
              justifyContent={"space-between"}
            >
              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <MdOutlineDirectionsBusFilled />
                  Nearest Bus Stand
                </Flex>
              </Text>

              <Text
                fontWeight={"500"}
                fontSize={{ base: "0.8rem", sm: "1.5rem" }}
              >
                ISBT Shimla (13km)
              </Text>
            </Flex>
          </VStack>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Description;
