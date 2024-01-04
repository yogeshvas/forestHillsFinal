import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const items = [
  <Image
    src="/P1F1.png"
    width={{ base: "100vw", md: "100%" }}
    height={{ base: "40vh", md: "90vh" }}
    objectFit={"fill"}
  />,
  <Image
    src="/P1F2.png"
    width={{ base: "100vw", md: "100%" }}
    height={{ base: "40vh", md: "90vh" }}
    objectFit={"fill"}
  />,
  <Image
    src="/P1F3.png"
    width={{ base: "100vw", md: "100%" }}
    height={{ base: "40vh", md: "90vh" }}
    objectFit={"cover"}
  />,
  <Image
    src="/P1F4.png"
    width={{ base: "100vw", md: "100%" }}
    height={{ base: "40vh", md: "90vh" }}
    objectFit={"cover"}
  />,
  <Image
    src="/P1F5.png"
    width={{ base: "100vw", md: "100%" }}
    height={{ base: "40vh", md: "90vh" }}
    objectFit={"cover"}
  />,
];

const Carousel = () => (
  <>
    <AliceCarousel
      animationType="fadeout"
      animationDuration={5000}
      disableButtonsControls
      disableDotsControls
      infinite
      autoPlay
      items={items}
      mouseTracking
    />{" "}
    <Box
      zIndex={1}
      position={"absolute"}
      top={{ base: "20", md: "10rem" }}
      alignItems={"center"}
    >
      <VStack width={"100vw"} textAlign={"center"}>
        <Text
          fontSize={{ base: "1.5rem", md: "4rem" }}
          color={"var(--lightText)"}
          marginTop={{ base: "", md: "5rem" }}
          fontWeight={"700"}
        >
          Forest Hill
        </Text>
        <Text
          fontSize={{ base: "0.7rem", md: "1.5rem" }}
          paddingX={{ base: "3rem", sm: "0" }}
          color={"var(--lightText)"}
        >
          Discover Tranquil Luxury: A Mountain Retreat in the Heart of Nature's
          Embrace
        </Text>
        <Flex
          marginTop={{ base: "0.7rem", sm: "2rem" }}
          gap={{ base: "3", sm: "10" }}
          direction={{ base: "column-reverse", sm: "row" }}
        >
          <Button
            fontWeight={{ base: 400, sm: "600" }}
            backgroundColor={"var(--lightBg)"}
            color={"var(--darkText)"}
            padding={0}
            size={{ base: "xs", sm: "lg" }}
            _hover={{
              color: "var(--lightText)",
              backgroundColor: "var(--darkText)",
            }}
            fontSize={{ base: "0.6rem", sm: "1.2rem" }}
          >
            <a href="tel:+919218750012">Contact Us</a>
          </Button>
          <Button
            fontWeight={{ base: 400, sm: "600" }}
            color={"var(--lightText)"}
            backgroundColor={"var(--darkText)"}
            size={{ base: "xs", sm: "lg" }}
            _hover={{
              backgroundColor: "var(--lightBg)",
              color: "var(--darkText)",
            }}
            fontSize={{ base: "0.6rem", sm: "1.2rem" }}
          >
            <a
              style={{
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
              href="tel:+919218750012"
            >
              Book Now
            </a>{" "}
          </Button>
        </Flex>
      </VStack>
    </Box>
  </>
);

export default Carousel;
