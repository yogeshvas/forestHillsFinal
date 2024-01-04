import React from "react";
import NavbarPc from "../../components/Navbar/NavbarPc";
import NavbarPhone from "../../components/Navbar/NavbarPhone";
import { Box, Text, VStack } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div
      style={{ minHeight: "95vh", display: "flex", flexDirection: "column" }}
    >
      <NavbarPc />
      <NavbarPhone />
      <Box
        color={"var(--darkText)"}
        paddingTop={{ base: "3rem", sm: "8rem" }}
        paddingX={{ base: "1.5rem", sm: "7rem" }}
        flex={1}
      >
        <VStack>
          <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={700}>
            Forest Hill Retreat
          </Text>
          <Text
            textAlign={"center"}
            paddingTop={"2rem"}
            fontSize={{ base: "1rem", sm: "1.5rem" }}
            fontWeight={600}
          >
            Where Nature Beckons and Hospitality Embraces
          </Text>
          <Text
            paddingTop={"3rem"}
            textAlign={"center"}
            fontSize={{ base: "1rem", sm: "1.2rem" }}
          >
            "Discover Serenity at Forest Hill, a captivating hotel cum cottage
            nestled 12 km away from the vibrant city of Shimla. Perched on the
            outskirts, amidst the serene hills and mountains, Forest Hill offers
            a breath-taking escape from the hustle and bustle of city life.
            Immerse yourself in the enchanting beauty of nature, with every
            glance revealing a picturesque landscape.
          </Text>
          <Text
            paddingTop={"3rem"}
            textAlign={"center"}
            fontSize={{ base: "1rem", sm: "1.2rem" }}
          >
            Our haven not only provides a tranquil retreat but also tantalizes
            your taste buds with delicious local cuisine, making you feel truly
            connected to the hills. Forest Hill Hotel is more than an escape;
            it's an invitation to experience the harmony of nature and the
            warmth of mountain hospitality."
          </Text>
        </VStack>
      </Box>
      <Box paddingTop={"10rem"}>
        <Footer />
      </Box>
    </div>
  );
};

export default About;
