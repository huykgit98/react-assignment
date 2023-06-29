import { Search } from "@mui/icons-material";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WhoToFollow from "./WhoToFollow";

export default function RightSidebar() {
  return (
    <Box sx={{ height: "100%" }}>
      <Box paddingTop="10px">
        <Box
          width="100%"
          borderRadius="15px"
          position="relative"
          sx={{
            background: "#1A202C",
          }}
        >
          <Input
            value=""
            onChange={(e) => {}}
            type="text"
            inputProps={{
              style: { padding: "10px", fontSize: "12px", color: "#A6A6AA" },
            }}
            disableUnderline
            fullWidth
            placeholder="Search Rep"
            startAdornment={
              <Search
                sx={{
                  paddingLeft: "20px",
                  color: "#A6A6AA",
                  fontSize: 50,
                }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            background: "#1A202C",
            borderRadius: "28px",
            padding: "10px 20px",
            margin: "1rem 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#A6A6AA" }}
          >
            Who to follow
          </Typography>
          <WhoToFollow />
        </Box>
      </Box>
    </Box>
  );
}
