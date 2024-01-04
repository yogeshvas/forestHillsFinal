import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import imgMain from "../../assets/rooms/couple/1.png";
import img1 from "../../assets/rooms/couple/2.png";
import img2 from "../../assets/rooms/couple/3.png";
import img3 from "../../assets/rooms/couple/4.png";
import img4 from "../../assets/rooms/couple/5.png";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FaWifi } from "react-icons/fa6";
import { PiBedDuotone } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiCallBellBold } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { MdNoDrinks } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import Footer from "../../components/Footer/Footer";
import CarouselModal from "./CarouselModal";
import couCar1 from "./carouselImages/couple/1.jpeg";
import couCar2 from "./carouselImages/couple/2.jpeg";
import couCar3 from "./carouselImages/couple/3.jpeg";
import couCar4 from "./carouselImages/couple/4.jpeg";

const Couples = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Main>
      {/*  */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Friends Room Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CarouselModal img1={img1} img2={img2} img3={img3} img4={img4} />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/*  */}
      <Box
        paddingTop={{ base: "7rem", sm: "12rem" }}
        paddingX={{ base: "1rem", sm: "9rem" }}
      >
        <Text
          fontSize={{ base: "1rem", sm: "2rem" }}
          marginBottom={{ base: "", sm: "1rem" }}
          color={"var(--darkText)"}
          fontWeight={"700"}
        >
          Cozy rooms for couples and friends
        </Text>
      </Box>
      <Box>
        <Box padding={"1rem"} display={{ base: "block", sm: "none" }}>
          {/* <Image
            borderRadius={"2rem"}
            padding={"1rem"}
            onClick={onOpen}
            src={imgMain}
          /> */}
          <CarouselModal
            img1={couCar1}
            img2={couCar2}
            img3={couCar3}
            img4={couCar4}
          />
        </Box>
        <Grid
          h="auto"
          width={"100vw"}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={{ base: 1, sm: 3 }}
          paddingX={{ base: "1rem", sm: "9rem" }}
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"center"}
          display={{ base: "none", sm: "grid" }}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Image
              width={"100%"}
              height={"auto"}
              objectFit={""}
              src={imgMain}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image width={"100%"} height={"100%"} src={img1} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image width={"100%"} height={"100%"} src={img2} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image width={"100%"} height={"100%"} src={img3} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              borderRightRadius={"1rem"}
              width={"100%"}
              height={"100%"}
              src={img4}
            />
          </GridItem>
        </Grid>
      </Box>
      <Flex
        marginBottom={{ base: "", sm: "7rem" }}
        paddingLeft={{ base: "1rem", sm: "9rem" }}
        paddingRight={{ base: "1rem", sm: "5.5rem" }}
        justifyContent={"space-between"}
        align={"center"}
        direction={{ base: "column", sm: "row" }}
      >
        <Box
          color={"var(--darkText)"}
          paddingTop={{ base: "1rem", sm: "0rem" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.7rem"}
        >
          <Text
            fontSize={{ base: "1rem", sm: "1.7rem" }}
            marginTop={{ base: "", sm: "4rem" }}
            fontWeight={600}
          >
            Elevating <br />
            Your Retreat with Unique Touches
            <br />
            <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>(Small Rooms)</Text>
          </Text>
          <Text
            marginTop={{ base: "", sm: "1rem" }}
            fontSize={{ base: "0.7rem", sm: "1rem" }}
          >
            A snug haven crafted for two, where comfort meets closeness.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Immerse in the ambiance of wooden elegance within the confines of
            your room.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Stay effortlessly linked with complimentary WiFi services at your
            fingertips.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Experience cozy luxury that won't break the bank.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Additional mattresses are available upon request to ensure a
            comfortable stay for everyone.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Experience a cozy seating area with wooden chairs for comfort.
          </Text>
          <Flex
            justifyContent={{ base: "space-evenly", sm: "flex-start" }}
            marginTop={{ base: "2rem", sm: "12rem" }}
            gap={{ base: "1rem", sm: "3rem" }}
            wrap={"wrap"}
            fontSize={{ base: "0.7rem", sm: "1rem" }}
          >
            <Text
              display={"flex"}
              gap={"0.7rem"}
              fontWeight={600}
              alignItems={"center"}
            >
              <PiCallBellBold />
              <Text>Room Service</Text>
            </Text>
            {/*  */}
            <Text
              display={"flex"}
              gap={"0.7rem"}
              fontWeight={600}
              alignItems={"center"}
            >
              <LuParkingCircle />
              <Text>Parking</Text>
            </Text>
            {/*  */}
            <Text
              display={"flex"}
              gap={"0.7rem"}
              fontWeight={600}
              alignItems={"center"}
            >
              <FaWifi />
              <Text>Free Wifi </Text>
            </Text>
            {/*  */}
            <Text
              display={"flex"}
              gap={"0.7rem"}
              fontWeight={600}
              alignItems={"center"}
            >
              <MdNoDrinks />
              <Text>No Alcohol</Text>
            </Text>
            {/*  */}
            <Text
              display={"flex"}
              gap={"0.7rem"}
              fontWeight={600}
              alignItems={"center"}
            >
              <MdBalcony />
              <Text>Balcony View</Text>
            </Text>
            {/*  */}
            <Text
              display={"flex"}
              gap={"0.7rem"}
              fontWeight={600}
              alignItems={"center"}
            >
              <PiTelevision />
              <Text>Television</Text>
            </Text>
          </Flex>
        </Box>

        <Box margin={"4rem"}>
          <Card
            boxShadow={"-1px 5px 7px 0px rgba(0,0,0,0.58);"}
            maxW="xs"
            width={{ base: "", sm: "20vw" }}
            padding={"2rem"}
            backgroundColor={"var(--lightBg)"}
          >
            <CardBody justifyContent={"left"} textAlign={"left"}>
              <Stack mt="" spacing="3">
                <Heading size="lg">
                  ₹ 2,200 <span style={{ fontWeight: 400 }}>night</span>
                </Heading>
                <Text
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                  fontSize="sm"
                >
                  <FaWifi /> Wifi Included
                </Text>
                <Text fontSize="sm">
                  <span style={{ fontWeight: 700 }}>2</span> members Allowed
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                  fontSize="sm"
                >
                  <PiBedDuotone />
                  Duo Delight Retreats
                </Text>
              </Stack>
            </CardBody>

            <CardFooter justifyContent={"center"} textAlign={"center"}>
              <ButtonGroup spacing="2">
                <VStack>
                  <Button
                    boxShadow={"-1px 1px 7px 0px rgba(0,0,0,0.58)"}
                    variant="solid"
                    width={"100%"}
                    marginX={10}
                    color={"var(--lightText)"}
                    display={"flex"}
                    gap={4}
                    backgroundColor={"var(--darkText)"}
                    _hover={{
                      backgroundColor: "var(--darkBg)",
                      color: "var(--darkText)",
                    }}
                  >
                    <FaRegCalendarCheck /> Book now
                  </Button>
                  <Button
                    boxShadow={"-1px 1px 7px 0px rgba(0,0,0,0.58)"}
                    variant="solid"
                    width={"100%"}
                    color={"var(--darkText)"}
                    display={"flex"}
                    gap={4}
                    marginX={"0.5rem"}
                    backgroundColor={"var(--lightText)"}
                  >
                    <a
                      style={{ display: "flex", gap: 5, alignItems: "center" }}
                      href="https://wa.me/8219998678?text=Hi,I'm %20planning a%20trip%20with%20my%20 Couple%20and%20would%20like%20to%20check%20room%20availability%20at%20your%20hotel.%20Can%20you%20please%20share%20rates%20and%20the %20booking%20process?."
                    >
                      <FaWhatsapp />
                      Whatsapp
                    </a>
                  </Button>
                </VStack>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
      <Footer />
    </Main>
  );
};

export default Couples;

const Main = styled.div``;
