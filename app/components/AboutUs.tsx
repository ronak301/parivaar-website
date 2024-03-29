import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Logo from "../../public/Parivaar.png";
import { Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
const AboutUs = () => {
  return (
    <Box
      id="aboutus"
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Divider sx={{ color: "#CBCBCB", width: "95rem" }} />
      </Box>
      <Box
        sx={{
          marginInline: { xs: "1rem", md: "6.3rem" },
          marginTop: { xs: "2rem", md: "4rem" },
          marginBottom: { xs: "2rem", md: "4rem" },
          display: "flex",
          gap: { xs: "2rem", sm: "5rem" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1.0rem", sm: "1.5rem" },
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.8rem",
              justifyContent: { xs: "flex-start", sm: "center" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "10%", sm: "1.8rem" },
                height: { xs: "10%", sm: "1.8rem" },
              }}
            >
              <Image
                src={Logo}
                alt=""
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </Box>

            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: "600",
                fontFamily: "'Poppins',sans-serif",
                color: "#000000",
              }}
            >
              Parivaar
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.7rem" },
                fontWeight: "400",

                fontFamily: "'Poppins',sans-serif",
                color: "#000000",
                lineHeight: "normal",
              }}
            >
              भारत से 🇮🇳 भारत के लिए ❤️
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#52525B",
                lineHeight: "normal",
                marginTop: "0.1rem",
                maxWidth: { xs: "100%", sm: "30rem" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: "5rem", sm: "1rem" },
              paddingTop: { xs: "0rem", sm: "0rem" },
              flexDirection: "row",
            }}
          >
            <XIcon
              style={{ fontSize: "1.6rem" }}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
            <FacebookIcon
              style={{ fontSize: "1.6rem" }}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
            <InstagramIcon
              style={{ fontSize: "1.6rem" }}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
            <GitHubIcon
              style={{ fontSize: "1.6rem" }}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: "0.6rem",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.3rem" },
              fontWeight: "700",
              fontFamily: "'Poppins',sans-serif",
              color: "#18181B",
            }}
          >
            Help
          </Typography>
          <Box sx={{ display: "flex", gap: "0.2rem" }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#0777FF",
              }}
            >
              Email:
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#18181B",
              }}
            >
              Ronakkothari301@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "0.2rem" }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#0777FF",
              }}
            >
              Phone:
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#18181B",
              }}
            >
              7042770304
            </Typography>
          </Box>
          <Box id="aboutus1" sx={{ display: "flex", gap: "0.2rem" }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#0777FF",
              }}
            >
              Address:
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
                color: "#18181B",
              }}
            >
              Sector 03, Udaipur
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
