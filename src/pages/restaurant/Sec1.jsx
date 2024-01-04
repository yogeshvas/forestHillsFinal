import {
  Box,
  Image,
  Text,
  VStack,
  Center,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { Grid, GridItem } from "@chakra-ui/react";
import HeadingSec1 from "./HeadingSec1";
import g1 from "../../assets/restaurentImages/g1.png";
import g2 from "../../assets/restaurentImages/g2.png";
import g3 from "../../assets/restaurentImages/g3.png";
import g4 from "../../assets/restaurentImages/g4.png";
import g5 from "../../assets/restaurentImages/g5.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Sec1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Main>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"var(--lightBg)"}>
          <ModalHeader color={"var(--darkText)"}>Restaurant Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody justifyContent={"center"}>
            {selectedImage && <Image width={"70rem"} src={selectedImage} />}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      {/* Modal */}
      <Box
        paddingTop={{ base: "5rem", sm: "10rem" }}
        paddingX={{ base: "1.5rem", sm: "5rem" }}
      >
        <Text
          color={"var(--darkText)"}
          fontSize={{ base: "1rem", sm: "2rem" }}
          fontWeight={700}
        >
          Discover the Soul of Our Restaurant
        </Text>
      </Box>
      <HeadingSec1 />
      <Text
        color={"var(--darkText)"}
        fontSize={{ base: "1rem", sm: "2rem" }}
        fontWeight={700}
        paddingX={{ base: "1.5rem", sm: "5rem" }}
      >
        Feast Your Eyes
      </Text>
      <Grid
        marginTop={"2rem"}
        paddingX={{ base: "", sm: "4rem" }}
        templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(5, 1fr)" }}
        gap={{ base: 10, md: 35 }}
      >
        {[
          { id: 1, image: g1 },
          { id: 2, image: g2 },
          { id: 3, image: g3 },
          { id: 4, image: g4 },
          { id: 5, image: g5 },
        ].map((item) => (
          <GridItem key={item.id} w="100%" h="auto">
            <Center onClick={() => handleImageClick(item.image)}>
              <Image borderRadius={"1.5rem"} src={item.image} />
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Main>
  );
};

export default Sec1;

const Main = styled.div`
  margin-bottom: 4rem;
`;
