import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { PostContext } from "./PostVerticalStepper";

export default function AddCaptionComp({ setActiveStep }) {
  let { postData } = useContext(PostContext);

  return (
    <Box>
      <img src={"http://localhost:5000" + postData.imageURL} />
      <Typography> {postData.caption}</Typography>

      <Button
        disabled={!postData.caption}
        variant="contained"
        color="primary"
        onClick={() => {
          setActiveStep((activeStep) => activeStep + 1);
        }}
      >
        Next
      </Button>
    </Box>
  );
}
