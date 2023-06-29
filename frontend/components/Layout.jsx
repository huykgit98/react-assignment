import React, { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import StickyHeader from "./Header";
import Box from "@mui/material/Box";
import { Grid, Hidden } from "@mui/material";
import { useTheme } from "@mui/system";
import { useDispatch } from "react-redux";

export default function Layout({ children, wallet }) {
  const theme = useTheme();

  return (
    <>
      <StickyHeader wallet={wallet} />
      <Grid container spacing={3}>
        <Grid item xs>
          <LeftSidebar />
        </Grid>
        <Grid item xs={6}>
          {children}
        </Grid>
        <Grid item xs>
          <RightSidebar />
        </Grid>
      </Grid>
    </>
  );
}
