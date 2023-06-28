import { Button, Grid, Input } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useState } from "react";

export default function AddPost() {
  const theme = useTheme();

  return (
    <Box padding="1rem 1rem 0 1rem" borderBottom="1px solid #ccc">
      <Grid container>
        <Grid item sx={{ paddingRight: "1rem" }}>
          <img src="/logo.png" alt="lgogo" width="50px" />
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
              placeholder="What's happening?"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            textAlign="right"
            paddingBottom=".5rem"
            paddingTop=".5rem"
            borderTop="1px solid #ccc"
          >
            <Button
              onClick={()=>{}}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: theme.shape.borderRadius,
                fontSize: "12px",
              }}
            >
              Post
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
