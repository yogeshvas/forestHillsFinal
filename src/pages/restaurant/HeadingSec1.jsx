import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/restaurentImages/WhatsApp Image 2023-12-30 at 17.35 1.png";
import { TbChefHat } from "react-icons/tb";
import { PiCallBellBold } from "react-icons/pi";
import { TbChecklist } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
const HeadingSec1 = () => {
  return (
    <div>
      <Flex
        color={"var(--darkText)"}
        alignItems={"center"}
        // gap={"1rem"}
        wrap={"wrap"}
        paddingTop={{ base: "1rem", sm: "6rem" }}
        paddingX={{ base: "1.5rem", sm: "5.5rem" }}
        paddingBottom={"8rem"}
      >
        <Image src={img1} />
        <Box
          paddingX={{ base: "1rem", sm: "1rem" }}
          marginLeft={{ base: "", sm: "2rem" }}
        >
          <Flex
            marginTop={{ base: "2rem", md: "0" }}
            gap={"25px"}
            direction={"column"}
          >
            {/* each item */}
            <Flex direction={"column"}>
              <Flex
                fontSize={{ base: "", sm: "1.2rem" }}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <TbChefHat />
                <Text fontWeight={600}>Professional Chef</Text>
              </Flex>
              <Text>
                Our culinary team is led by a highly skilled and professional
                chef.
              </Text>
            </Flex>
            {/* each item */}
            <Flex direction={"column"}>
              <Flex
                fontSize={{ base: "", sm: "1.2rem" }}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <PiCallBellBold />
                <Text fontWeight={600}>Cuisine Offerings</Text>
              </Flex>
              <Text>
                We specialize in diverse cuisines, including Indian, Himachali,
                and Chinese
              </Text>
            </Flex>
            {/* each item */}
            <Flex direction={"column"}>
              <Flex
                fontSize={{ base: "", sm: "1.2rem" }}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <TbChecklist />
                <Text fontWeight={600}>Ordering Convenience:</Text>
              </Flex>
              <Text>
                Enjoy the ease of ordering from our menu, designed to cater to
                your culinary preferences.
              </Text>
            </Flex>
            {/* each item */}
            <Flex direction={"column"}>
              <Flex
                fontSize={{ base: "", sm: "1.2rem" }}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <MdOutlinePeopleAlt />
                <Text fontWeight={600}>Seating Capacity</Text>
              </Flex>
              <Text>
                With a spacious setting, our restaurant offers seating for 40+,
                ensuring a dining experience.
              </Text>
            </Flex>
            {/* each item */}
            <Flex wrap={"wrap"} direction={"column"}>
              <Flex
                fontSize={{ base: "", sm: "1.2rem" }}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <RiGalleryFill />
                <Text fontWeight={600}>Scenic Ambiance</Text>
              </Flex>
              <Text>
                Take in the natural beauty through our expansive windows,
                providing a view of the nature.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default HeadingSec1;
