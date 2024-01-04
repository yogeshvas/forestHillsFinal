import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Nav = ({ setSelectedTab, selectedTab }) => {
  return (
    <VStack
      color={"var(--darkText)"}
      opacity={"80%"}
      width={"100vw"}
      justifyContent={"left"}
      textAlign={"center"}
    >
      <Flex
        height={"auto"}
        gap={{ base: 12, sm: 16 }}
        padding={"0.5rem"}
        paddingX={{ base: "", sm: "6rem" }}
        // marginLeft={"25%"}
        position={"absolute"}
        top={{ base: "3rem", sm: "7rem" }}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"0.4rem"}
        fontSize={{ base: "1rem", sm: "1.2rem" }}
        backgroundColor={"var(--lightBg)"}
      >
        <Flex
          cursor={"pointer"}
          _hover={{
            borderBottom: "1px solid var(--darkText)",
          }}
          gap={3}
          alignItems={"center"}
          onClick={() => setSelectedTab(1)}
          fontWeight={selectedTab === 1 ? 700 : ""}
        >
          <Box>
            {/* Icon */}
            <FaPeopleGroup />
          </Box>
          <Text>Family</Text>
        </Flex>

        <Flex
          cursor={"pointer"}
          fontWeight={selectedTab === 2 ? 700 : ""}
          _hover={{
            borderBottom: "1px solid var(--darkText)",
          }}
          gap={3}
          alignItems={"center"}
          onClick={() => setSelectedTab(2)}
        >
          <Box>
            {/* Icon */}
            <MdOutlinePeopleAlt />
          </Box>
          <Text>Friends</Text>
        </Flex>

        <Flex
          cursor={"pointer"}
          _hover={{
            borderBottom: "1px solid var(--darkText)",
          }}
          gap={3}
          alignItems={"center"}
          onClick={() => setSelectedTab(3)}
          fontWeight={selectedTab === 3 ? 700 : ""}
        >
          <Box>
            {/* Icon */}
            <FaHeart />
          </Box>
          <Text>Couples</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Nav;
