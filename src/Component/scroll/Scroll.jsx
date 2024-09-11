import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import React from "react";

export default function Scroll() {
  return (
    <Zoom  in ={useScrollTrigger({threshold : 100})}>
      <Fab
      onClick={()=>{
        window.scrollTo(0 , 0)
      }}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
