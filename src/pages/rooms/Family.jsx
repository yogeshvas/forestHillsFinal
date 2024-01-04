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
import imgMain from "../../assets/rooms/family/mainpicfamilyroom.jpeg";
import img1 from "../../assets/rooms/family/PIC 1.png";
import img2 from "../../assets/rooms/family/PIC 2.png";
import img3 from "../../assets/rooms/family/PIC 3.png";
import img4 from "../../assets/rooms/family/PIC4.jpeg";
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
//
import famCar1 from "./carouselImages/family/1.jpeg";
import famCar2 from "./carouselImages/family/2.jpeg";
import famCar3 from "./carouselImages/family/3.jpeg";
import famCar4 from "./carouselImages/family/4.jpeg";
//

const Family = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Main>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Room Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CarouselModal img1={img1} img2={img2} img3={img3} />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/* Modal */}
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
          Family Delux Room
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
            img1={famCar1}
            img2={famCar2}
            img3={famCar3}
            img4={famCar4}
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
              borderTopLeftRadius={"2rem"}
              borderBottomLeftRadius={"2rem"}
              width={"100%"}
              height={"98.5%"}
              objectFit={"cover"}
              src={imgMain}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image width={"100%"} height={"auto"} src={img1} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image width={"100%"} height={"auto"} src={img2} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image width={"100%"} height={"auto"} src={img3} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              borderRightRadius={"1rem"}
              width={"100%"}
              height={"auto"}
              src={img3}
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
          gap={"1rem"}
        >
          <Text
            marginTop={{ base: "", sm: "4rem" }}
            fontSize={{ base: "1rem", sm: "1.7rem" }}
            fontWeight={600}
          >
            Comfort Craft <br />
            Elevating Stays with Signature Features
            <br />
            <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>(Large Rooms)</Text>
          </Text>
          <Text
            marginTop={{ base: "", sm: "1rem" }}
            fontSize={{ base: "0.7rem", sm: "1rem" }}
          >
            Designed for comfort, our Family Deluxe Room accommodates up to 4
            guests.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Enjoy the convenience of room service, with charges applicable.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Stay connected with complimentary WiFi services during your stay.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Revel in the beauty of your surroundings with a picturesque view
            from the room.
          </Text>
          <Text fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Two stylish sofas and a table enhance the ambiance, providing a cozy
            seating area.
          </Text>
          <Text fontWeight={"bold"} fontSize={{ base: "0.7rem", sm: "1rem" }}>
            Need extra sleeping arrangements? Additional mattresses are
            available to ensure a comfortable stay for everyone.
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
                  ₹ 4,500 <span style={{ fontWeight: 400 }}>night</span>
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
                  <span style={{ fontWeight: 700 }}>4</span> members Allowed
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
                    width={"95%"}
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
                    width={"95%"}
                    marginX={10}
                    color={"var(--darkText)"}
                    display={"flex"}
                    gap={4}
                    backgroundColor={"var(--lightText)"}
                  >
                    <a
                      style={{ display: "flex", gap: 5, alignItems: "center" }}
                      href="https://wa.me/8219998678?text=Hi,I'm %20planning a%20trip%20with%20my%20 Family%20and%20would%20like%20to%20check%20room%20availability%20at%20your%20hotel.%20Can%20you%20please%20share%20rates%20and%20the %20booking%20process?."
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

export default Family;

const Main = styled.div``;
