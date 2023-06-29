import { Typography, Grid, Input, Avatar, Box, Button } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import GifBoxOutlined from "@mui/icons-material/GifBoxOutlined";
import AddLocationAltOutlined from "@mui/icons-material/AddLocationAltOutlined";
import RateReviewOutlined from "@mui/icons-material/RateReviewOutlined";

import React from "react";

export default function AddPost() {
  const theme = useTheme();

  return (
    <Box sx={{ borderRadius: "16px" }}>
      <Grid container>
        <Grid item sx={{ paddingRight: "1rem" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Grid>
        <Grid item flexGrow="1">
          <Box padding=".5rem 0">
            <Input
              value=""
              onChange={() => {}}
              multiline
              rows="2"
              disableUnderline
              type="text"
              placeholder="What's on your mind?"
              sx={{ width: "100%", color: "#A6A6AA" }}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <ImageOutlined style={{ color: "#4269F2" }} />
              <GifBoxOutlined style={{ color: "#4269F2" }} />
              <AddLocationAltOutlined style={{ color: "#4269F2" }} />
              <RateReviewOutlined style={{ color: "#4269F2" }} />
            </Box>
            <Box display="flex">
              <Button
                onClick={() => {}}
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "5px",
                  fontSize: "12px",
                  background:
                    "linear-gradient(to right, #8c1aff, #6600cc, #3333cc)",
                }}
              >
                Say
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
