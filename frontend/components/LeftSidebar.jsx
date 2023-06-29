import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import {
  Button,
  Grid,
  Hidden,
  IconButton,
  Input,
  useTheme,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomizedSwitch from "../components/CustomSwitch";

export default function LeftSidebar() {
  const theme = useTheme();

  return (
    <Box paddingTop="10px">
      <Box
        sx={{
          height: "60vh",
          maxWidth: "100%",
          backgroundColor: "#1A202C",
          borderRadius: "16px",
        }}
      >
        <List>
          <ListItem
            ButtonBase
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <HomeIcon fontSize="medium" style={{ color: "#A6A6AA" }} />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "#A6A6AA",
                }}
                primary="Home"
              />
            </Hidden>
          </ListItem>
          <ListItem
            ButtonBase
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <BookmarkIcon fontSize="medium" style={{ color: "#A6A6AA" }} />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "#A6A6AA",
                }}
                primary="Blog"
              />
            </Hidden>
          </ListItem>
          <ListItem
            ButtonBase
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <PersonOutlineIcon
                fontSize="medium"
                style={{ color: "#A6A6AA" }}
              />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "#A6A6AA",
                }}
                primary="Notifications"
              />
            </Hidden>
          </ListItem>

          <ListItem
            ButtonBase
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <ChatBubbleOutlineIcon
                fontSize="medium"
                style={{ color: "#A6A6AA" }}
              />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "#A6A6AA",
                }}
                primary="Messages"
              />
            </Hidden>
          </ListItem>
          <ListItem
            ButtonBase
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <PersonOutlineIcon
                fontSize="medium"
                style={{ color: "#A6A6AA" }}
              />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "#A6A6AA",
                }}
                primary="Bookmarks"
              />
            </Hidden>
          </ListItem>
          <ListItem
            ButtonBase
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <PersonOutlineIcon
                fontSize="medium"
                style={{ color: "#A6A6AA" }}
              />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: "#A6A6AA",
                }}
                primary="Profile"
              />
            </Hidden>
          </ListItem>
        </List>
        <Box
          sx={{
            maxWidth: "100%",
            backgroundColor: "#1A202C",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Hidden lgDown>
            <Button
              onClick={() => {}}
              variant="contained"
              style={{
                borderRadius: "15px",
                padding: "6px 16px",
                textTransform: "capitalize",
                width: "60%",
                background:
                  "linear-gradient(to right, #8c1aff, #6600cc, #3333cc)",
              }}
            >
              Say
            </Button>
          </Hidden>
          <Hidden lgDown>
            <CustomizedSwitch />
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
}
