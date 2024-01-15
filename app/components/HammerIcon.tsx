"use client";
import React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import logo from "../../public/Parivaar.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ScrollLink from "./ScrollLink";
const HammerIcon = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => () => {
    setDrawerOpen(open);
  };
  return (
    <div style={{}}>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ display: { sm: "block", md: "none" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ paddingTop: "0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",

              gap: "5rem",
              alignItems: "center",

              height: "100vh",
              padding: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "0.7rem",
                justifyContent: "center",
                alignItems: "center",
                marginInline: { xs: "auto", sm: "0" },
              }}
            >
              <Box sx={{ width: "2.2rem", height: "2.2rem" }}>
                <Image
                  src={logo}
                  alt="Picture of the author"
                  objectFit="cover"
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "2.2rem",
                  lineHeight: "normal",
                  color: "#000000",
                  fontFamily: "'Poppins',sans-serif",
                }}
              >
                Parivaar
              </Typography>
            </Box>
            <ScrollLink
              className="btn"
              href="#aboutus"
              style={{
                fontWeight: "400",
                fontSize: "1.5rem",
                lineHeight: "normal",
                color: "#666666",
                fontFamily: "'Poppins',sans-serif",
              }}
            >
              About Us
            </ScrollLink>

            <ScrollLink
              className="btn"
              href="#contact"
              style={{
                fontWeight: "400",
                fontSize: "1.5rem",
                lineHeight: "normal",

                color: "#666666",
                fontFamily: "'Poppins',sans-serif",
              }}
            >
              Contact Us
            </ScrollLink>
            <Button
              sx={{
                fontWeight: "400",
                fontSize: "1.5rem",
                lineHeight: "normal",
                borderRadius: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1.4px solid #0777FF",
                color: "#FFFFFF",
                backgroundColor: "#0777FF",
                fontFamily: "'Poppins',sans-serif",
                padding: "0.5rem 2rem",
                ":hover": {
                  bgcolor: "#3189f5",
                  color: "white",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </List>
      </Drawer>
    </div>
  );
};

export default HammerIcon;
