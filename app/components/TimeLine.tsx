import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import timelineData from "./timelineData.json";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Box from "@mui/material/Box";
import Image from "next/image";

import Typography from "@mui/material/Typography";

interface TextData {
  title: string;
  description: string;
}
interface TimelineCardProps {
  imagesrc: string;
  textData: TextData;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ imagesrc, textData }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          m: "auto 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "9rem",
        }}
        variant="body2"
        color="text.secondary"
      >
        <Box
          sx={{
            width: "100%",
            height: "20rem",
          }}
        >
          <Image
            style={{
              width: "100%",
              borderRadius: "1rem",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "white",
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
            }}
            width={170}
            height={240}
            src={imagesrc}
            alt=""
          />
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={{
            backgroundColor: "#0777FF",
            filter: "drop-shadow(0px 4px 30px rgba(111, 100, 100, 0.38))",
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            border: "2px solid #fff",
          }}
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
          width: "9rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.35rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: { xs: "1.1rem", sm: "1.5rem" },
              fontWeight: "600",
              lineHeight: "normal",

              color: "#0777FF",
              width: { xs: "100%", sm: "23rem" },
              textAlign: "start",
            }}
          >
            {textData.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              fontWeight: "400",
              lineHeight: "normal",
              textAlign: "start",
              color: "#767070",
              width: { xs: "100%", sm: "23rem" },
            }}
          >
            {textData.description}
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

const TimeLine = () => {
  return (
    <Timeline position="alternate" sx={{ marginTop: "5rem" }}>
      <Box
        sx={{
          opacity: 0,
          height: 0,
        }}
      >
        <TimelineCard imagesrc="" textData={{ title: "", description: "" }} />
      </Box>
      {timelineData.map((item, index) => (
        <TimelineCard
          key={index}
          imagesrc={item.imagesrc}
          textData={item.textData}
        />
      ))}
    </Timeline>
  );
};

export default TimeLine;
