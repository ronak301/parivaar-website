import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import logo from "../../public/Parivaar.png";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, position: "sticky" }}>
        <AppBar
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.50)",
            backdropFilter: "blur(50px)",
            borderBottom: "1.2px solid #EEEEEF",
            boxShadow: "none",
            padding: "0.65rem 4.9375rem 0.65rem 3.875rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          position="static"
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "2rem", height: "2rem" }}>
              <Image src={logo} alt="Picture of the author" objectFit="cover" />
            </Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "2rem",
                lineHeight: "normal",
                color: "#000000",
                fontFamily: "'Poppins',sans-serif",
              }}
            >
              Parivaar
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ScrollLink
              className="btn"
              href="#aboutus"
              style={{
                fontWeight: "400",
                fontSize: "1.15rem",
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
                fontSize: "1.15rem",
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
                fontSize: "1.15rem",
                lineHeight: "normal",
                borderRadius: "1.6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1.4px solid #0777FF",
                color: "#FFFFFF",
                backgroundColor: "#0777FF",
                fontFamily: "'Poppins',sans-serif",
                padding: "0.3rem 2rem",
                ":hover": {
                  bgcolor: "#3189f5",
                  color: "white",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
