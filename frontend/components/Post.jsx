import {
  Grid,
  IconButton,
  Input,
  Typography,
  Menu,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Box } from "@mui/system";
import MediaComponent from "./MediaComponent";

export default function Post({ post }) {
  return (
    <>
      <Box paddingTop="10px">
        <Box
          padding="1rem"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            backgroundColor: "#1A202C",
          }}
        >
          <Grid container flexWrap="nowrap">
            <Grid item sx={{ paddingRight: "1rem" }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex">
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            mr: "6px",
                            color: "#555",
                          }}
                        >
                          {post.account_id}
                        </Typography>
                        <Typography
                          sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                        >
                          @{post.account_id}
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <Typography
                          sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                        >
                          2 hours ago
                        </Typography>
                        <MoreHorizIcon />
                      </Box>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "15px", color: "white" }}>
                        {post.title}
                      </Typography>
                    </Box>
                    <Box>
                      <MediaComponent
                        type={post.post_type.type}
                        url={post.post_type.url}
                      />
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
                    <ChatBubbleOutlineIcon
                      fontSize="small"
                      style={{ color: "#A6A6AA" }}
                    />
                  </IconButton>
                  <IconButton size="small">
                    <SyncIcon fontSize="small" style={{ color: "#A6A6AA" }} />
                  </IconButton>
                  <IconButton onClick={() => {}} size="small">
                    <FavoriteBorderIcon
                      fontSize="small"
                      style={{ color: "#A6A6AA" }}
                    />
                  </IconButton>
                  <IconButton size="small">
                    <IosShareIcon
                      fontSize="small"
                      style={{ color: "#A6A6AA" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
