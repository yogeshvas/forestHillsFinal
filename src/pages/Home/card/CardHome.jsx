import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../../rooms/Nav";
import { NavLink } from "react-router-dom";

const CardHome = ({ image, title, desc, footer, nav }) => {
  return (
    <NavLink to={nav}>
      <Box
        boxShadow={"-1px 5px 7px 0px rgba(0,0,0,0.58);"}
        borderRadius={"1rem"}
        width={{ base: "14 rem", sm: "25rem" }}
        backgroundColor={"white"}
        padding={"1rem"}
        marginX={{ base: "2rem", sm: "" }}
        height={{ base: "", sm: "25rem" }}
      >
        <Flex flexDirection={"column"} gap={2}>
          <Image
            borderRadius={"1rem"}
            width={"100%"}
            height={{ base: "10rem", sm: "15rem" }}
            src={image}
            objectFit={"cover"}
          />
          <Text fontSize={{ base: "", sm: "1.5rem" }} fontWeight={600}>
            {title}
          </Text>
          <Text fontSize={{ base: "", sm: "1rem" }}>{desc}</Text>
          <Text fontSize={{ base: "", sm: "1rem" }}>{footer}</Text>
        </Flex>
      </Box>
    </NavLink>
  );
};

export default CardHome;
