import React from "react";
import { Box } from "@mui/material";

const mediaContainerStyles = {
  maxWidth: "100%",
  maxHeight: "100%",
};

const MediaComponent = ({ type, url }) => {
  if (type === "Image") {
    return <img src={url} alt="Image" style={mediaContainerStyles} />;
  }

  if (type === "Video") {
    const parts = url.split("/");
    const videoId = parts.length > 1 ? parts.pop() : "";
    return (
      <Box style={mediaContainerStyles}>
        <iframe
          width="480"
          height="275"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </Box>
    );
  }

  return "";
};

export default MediaComponent;
