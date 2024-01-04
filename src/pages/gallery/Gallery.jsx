import React, { useState } from "react";
import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
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

import NavbarPc from "../../components/Navbar/NavbarPc";
import NavbarPhone from "../../components/Navbar/NavbarPhone";
import Footer from "../../components/Footer/Footer";
import res1 from "../../assets/gallery/restaurant/1.jpeg";
import res2 from "../../assets/gallery/restaurant/2.jpeg";
import res3 from "../../assets/gallery/restaurant/3.jpeg";
import res4 from "../../assets/gallery/restaurant/4.jpeg";
import room1 from "../../assets/gallery/rooms/1.jpeg";
import room2 from "../../assets/gallery/rooms/2.jpeg";
import room3 from "../../assets/gallery/rooms/3.jpeg";
import room4 from "../../assets/gallery/rooms/4.jpeg";
import nat1 from "../../assets/gallery/nature/1.jpeg";
import nat2 from "../../assets/gallery/nature/2.jpeg";
import nat3 from "../../assets/gallery/nature/3.jpeg";
import nat4 from "../../assets/gallery/nature/4.jpeg";
import pick1 from "../../assets/gallery/picks/1.jpeg";
import pick2 from "../../assets/gallery/picks/2.jpeg";
import pick3 from "../../assets/gallery/picks/3.jpeg";
import pick4 from "../../assets/gallery/picks/4.jpeg";

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <div>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gallery</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedImage && <Image src={selectedImage} />}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <NavbarPc />
      <NavbarPhone />
      <Box
        color={"var(--darkText)"}
        paddingTop={{ base: "4rem", sm: "8rem" }}
        paddingX={{ base: "1.5rem", sm: "7rem" }}
      >
        <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={700}>
          Captured Tranquillity
        </Text>
        <Text fontWeight={400}>
          A Pictorial Symphony of Forest Hill's Natural Elegance
        </Text>

        <Box paddingY={"2rem"}>
          <Text
            fontSize={{ base: "", sm: "1.5rem" }}
            marginBottom={"1rem"}
            fontWeight={700}
          >
            {" "}
            Restaurant
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
            gap={6}
          >
            <GridItem onClick={() => handleImageClick(res1)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={res1}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem w="100%" h="auto" onClick={() => handleImageClick(res2)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={res2}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(res3)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={res3}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(res4)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={res4}
                borderRadius={"1rem"}
              />
            </GridItem>
          </Grid>
        </Box>

        <Box paddingY={"2rem"}>
          <Text
            marginBottom={"1rem"}
            fontSize={{ base: "", sm: "1.5rem" }}
            fontWeight={700}
          >
            {" "}
            Rooms
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
            gap={6}
          >
            <GridItem onClick={() => handleImageClick(room1)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={room1}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(room2)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={room2}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(room3)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={room3}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(room4)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={room4}
                borderRadius={"1rem"}
              />
            </GridItem>
          </Grid>
        </Box>

        <Box paddingY={"2rem"}>
          <Text
            marginBottom={"1rem"}
            fontSize={{ base: "", sm: "1.5rem" }}
            fontWeight={700}
          >
            {" "}
            Scenic Nature
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
            gap={6}
          >
            <GridItem onClick={() => handleImageClick(nat1)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={nat1}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(nat2)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={nat2}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(nat3)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={nat3}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(nat4)}>
              <Image
                objectFit={"cover"}
                width={"100%"}
                height={"17rem"}
                src={nat4}
                borderRadius={"1rem"}
              />
            </GridItem>
          </Grid>
        </Box>

        <Box paddingY={"2rem"}>
          <Text
            fontSize={{ base: "", sm: "1.5rem" }}
            marginBottom={"1rem"}
            fontWeight={700}
          >
            {" "}
            Fresh Picks Corner
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
            gap={6}
          >
            <GridItem onClick={() => handleImageClick(pick1)}>
              <Image
                objectFit={"cover"}
                src={pick1}
                width="100%"
                height={{ base: "9rem", sm: "18rem" }}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(pick2)}>
              <Image
                objectFit={"cover"}
                src={pick2}
                width="100%"
                height={{ base: "9rem", sm: "18rem" }}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(pick3)}>
              <Image
                objectFit={"cover"}
                width="100%"
                height={{ base: "9rem", sm: "18rem" }}
                src={pick3}
                borderRadius={"1rem"}
              />
            </GridItem>
            <GridItem onClick={() => handleImageClick(pick4)}>
              <Image
                objectFit={"cover"}
                width="100%"
                height={{ base: "9rem", sm: "18rem" }}
                src={pick4}
                borderRadius={"1rem"}
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box paddingTop={"4rem"}>
        <Footer />
      </Box>
    </div>
  );
};

export default Gallery;
