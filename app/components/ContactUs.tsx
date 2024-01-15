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
          padding: "0.325rem 0.2rem",
          width: "8rem",
          marginTop: "5rem",
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
          marginTop: "2rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "600",
            fontSize: "2.7rem",
            color: "#000000",
            width: "17rem",

            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "400",
            fontSize: "1rem",
            width: "27rem",
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
        sx={{ width: "70%", marginTop: "5rem", marginBottom: "10rem" }}
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
          <Box sx={{ width: "26rem", height: "29rem", borderRadius: "1.2rem" }}>
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
          xs={6.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
