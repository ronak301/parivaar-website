import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Contact from "../../public/Cont.png";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1.5rem",
          border: "0.4px solid #0777FF",
          backgroundColor: "#F0F7FF",
          textAlign: "center",
          padding: { xs: "0.3rem 5.6rem", sm: "0.5rem 2rem" },
          marginTop: { xs: "2rem", sm: "5rem" },
        }}
      >
        Get In Touch
      </Button>
      <Box
        style={{}}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.3rem",
          marginTop: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "600",

            color: "#000000",
            width: { xs: "100%", sm: "17rem" },
            fontSize: { xs: "2rem", sm: "2.7rem" },

            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "400",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            width: { xs: "100%", sm: "27rem" },

            color: "#000000",

            textAlign: "center",
          }}
        >
          Parivaar Platform lets you plan and manage all your social communities
          at one place.
        </Typography>
      </Box>

      <Grid
        container
        spacing={0}
        sx={{
          width: { xs: "100%", sm: "70%" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "none" },
          gap: { xs: "2rem", sm: "0" },
          marginTop: "5rem",
          marginBottom: "10rem",
        }}
      >
        <Grid
          item
          xs={5.8}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "26rem" },
              height: { xs: "auto", sm: "29rem" },
              borderRadius: "1.2rem",
            }}
          >
            <Image
              src={Contact}
              width={300}
              height={300}
              objectFit="cover"
              objectPosition="center"
              layout="responsive"
              quality={100}
              style={{ borderRadius: "1.2rem" }}
              alt=""
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100vw",
                sm: "70%",
              },
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ContactForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
