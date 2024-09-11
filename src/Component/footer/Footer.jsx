import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        color="HighlighText"
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        sx={{fontSize:18}}
      >
        Designed And developed by 
        <Button sx={{
            mx:0.5,
            fontSize:"18px",
            textTransform:"capitalize",
            color:"#ff7790"
        }}
        variant="text"
        color="primary"
        >
            Yihea Aladawi
        </Button>
        @2024
      </Typography>
    </Box>
  );
}
