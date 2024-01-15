import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import p3 from "../../public/p3.png";
import ScrollLink from "./ScrollLink";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import p4 from "../../public/p4.png";
import p5 from "../../public/p5.png";

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={5.8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0rem",
              paddingInline: "10rem",
              paddingTop: "8rem",
              paddingBottom: "5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // border: "2px solid red",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "800",
                  fontSize: "3rem",
                  color: "#000000",
                }}
              >
                India First{" "}
              </Typography>
              <Typography sx={{ opacity: 0 }}>_</Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "800",
                  fontSize: "3rem",
                  color: "#0777FF",
                }}
              >
                Local
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // border: "2px solid red",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "800",
                  fontSize: "3rem",
                  color: "#0777FF",
                }}
              >
                Community
              </Typography>
              <Typography sx={{ opacity: 0 }}>_</Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "800",
                  fontSize: "3rem",
                  color: "#000000",
                }}
              >
                Platform
              </Typography>
            </Box>
            <Box sx={{ width: "29rem", height: "3rem", paddingTop: "2rem" }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: "400",
                  fontSize: "1.25rem",
                  color: "#767070",
                }}
              >
                Parivaar Platform lets you plan and manage all your social
                communities at one place.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1.3rem",
              paddingInline: "10rem",
            }}
          >
            <ScrollLink
              style={{
                borderRadius: "2.5rem",
                border: "1.4px solid #0777FF",
                backgroundColor: "#0777FF",
                padding: "1rem 2rem",
                display: "flex",
                color: "#FFFFFF",
                fontFamily: "'Poppins',sans-serif",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="#advantages"
            >
              Get Started
            </ScrollLink>

            <Button
              sx={{
                borderRadius: "2.5rem",
                border: "1.4px solid #0777FF",
                padding: "1rem 2rem",
                display: "flex",
                color: "#0777FF",
                fontFamily: "'Poppins',sans-serif",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              See Demo
            </Button>
          </Box>
          <Box sx={{ paddingInline: "10rem", paddingTop: "2rem" }}>
            <Divider sx={{ color: "#EAEAEA", width: "28rem" }} />
          </Box>
          <Box
            sx={{
              paddingInline: "10rem",
              marginTop: "0.9rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-start",
              height: "5rem",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "9rem",

                border: "2px solid #FFFFFF",
              }}
            >
              <Image src={p4} alt="" />
            </Box>
            <Box
              sx={{
                width: "9rem",

                border: "2px solid #FFFFFF",
              }}
            >
              <Image src={p5} alt="" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6.2}>
          <Box
            sx={{
              width: "100%",
              background:
                "linear-gradient(164deg, #F4F9FF 7.96%, #FFF 51.61%, #F4F9FF 89.7%)",
              display: "flex",

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "38rem",
                height: "40rem",
                margin: "4rem",
              }}
            >
              <Image src={p3} alt="" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
