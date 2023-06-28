import {
  Grid,
  IconButton,
  Input,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";


export default function Post({ post}) {
  return (
    <>
        <Box
          padding="1rem"
          sx={{
            "&:hover": {
              backgroundColor: "#eee",
            },
          }}
        >
          <Grid container flexWrap="nowrap">
            <Grid item sx={{ paddingRight: "1rem" }}>
                <img src="/logo.png" alt="lgoog" width="50px" />
            </Grid>
            <Grid item flexGrow="1">
              <Box>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="nowrap"
                >
                  <Grid item>
                    <Box display="flex">
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: 500, mr: "6px" }}
                      >
                        huy
                      </Typography>
                      <Typography
                        sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                      >
                        @huy
                      </Typography>
                    
                     
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "15px", color: "#555" }}>
                        {post.title}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box display="flex">
                      <Typography
                        sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                      >
                        2 hours ago
                      </Typography>
                        <MoreHorizIcon />
                      </Box>                
                  </Grid>
                </Grid>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginRight="5rem"
                  marginTop=".8rem"
                >
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    size="small"
                  >
                    <ChatBubbleOutlineIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <SyncIcon fontSize="small" />
                  </IconButton>
                  <IconButton onClick={() => {}} size="small">
                      <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <IosShareIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>     
   </>
  );
}
