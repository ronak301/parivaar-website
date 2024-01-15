import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.3rem",
        marginInline: "13rem",
        marginTop: "4rem",

        justifyContent: "center",
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
        }}
      >
        advantages
      </Button>
      <Box id="advantages">
        <Typography
          sx={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "600",
            fontSize: "2.7rem",
            color: "#000000",
          }}
        >
          Benefits of Parivaar App
        </Typography>
      </Box>
      <Box sx={{ width: "30rem", textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: "400",
            fontSize: "1.1rem",
            color: "#767070",
            lineHeight: "normal",
            fontStyle: "normal",
          }}
        >
          Parivaar Platform lets you plan and manage all your social communities
          at one place.
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
