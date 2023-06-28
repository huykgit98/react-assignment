import { Button, Grid, Input, Avatar, Box  } from "@mui/material";
import { Box, useTheme } from "@mui/system";

import React, { useState } from "react";

export default function AddPost() {
  const theme = useTheme();

  return (
    <Box padding="1rem 1rem 0 1rem" borderBottom="1px solid #ccc">
      <Grid container>
        <Grid item sx={{ paddingRight: "1rem" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Grid>
        <Grid item flexGrow="1">
          <Box padding=".5rem 0">
            <Input
              value=''
              onChange={() => {}}
              multiline
              rows="2"
              disableUnderline
              type="text"
              placeholder="What's on your mind?"
              sx={{ width: "100%", color: "#A6A6AA" }}
            />
          </Box>
          <Box
            textAlign="right"
            // paddingBottom=".5rem"
            // paddingTop=".5rem"
            // borderTop="1px solid #ccc"
          >
            <Button
              onClick={()=>{}}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "15px",
                fontSize: "12px",
              }}
            >
              Say
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
