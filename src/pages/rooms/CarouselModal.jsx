import { Image, Box, IconButton } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const CarouselModal = ({ img1, img2, img3, img4 }) => {
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };
  const items = [
    <div className="item" data-value="1">
      <Image
        borderRadius={"0.5rem"}
        width={"100%"}
        height={"20rem"}
        objectFit={"cover"}
        src={img1}
      />
    </div>,
    <div className="item" data-value="2">
      <Image
        borderRadius={"0.5rem"}
        width={"100%"}
        height={"20rem"}
        objectFit={"cover"}
        src={img2}
      />
    </div>,
    <div className="item" data-value="2">
      <Image
        borderRadius={"0.5rem"}
        width={"100%"}
        height={"20rem"}
        objectFit={"cover"}
        src={img3}
      />
    </div>,
    <div className="item" data-value="2">
      <Image
        borderRadius={"0.5rem"}
        width={"100%"}
        height={"20rem"}
        objectFit={"cover"}
        src={img4}
      />
    </div>,
  ];

  const renderPrevButton = ({ isDisabled, onClick }) => (
    <IconButton
      color={"var(--darkText)"}
      aria-label="Next"
      disabled={isDisabled}
      onClick={onClick}
    >
      <GrCaretPrevious style={{ color: "var(--darkText)" }} />
    </IconButton>
  );

  const renderNextButton = ({ isDisabled, onClick }) => (
    <IconButton aria-label="Next" disabled={isDisabled} onClick={onClick}>
      <GrCaretNext style={{ color: "var(--darkText)" }} />
    </IconButton>
  );

  return (
    <Box>
      <AliceCarousel
        disableDotsControls
        mouseTracking
        items={items}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </Box>
  );
};

export default CarouselModal;
