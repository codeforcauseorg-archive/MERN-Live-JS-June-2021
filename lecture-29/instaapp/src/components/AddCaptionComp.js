import { Box, Button, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { PostContext } from "./PostVerticalStepper";

export default function AddCaptionComp({setActiveStep}) {
  let { postData, setPostData } = useContext(PostContext);
  let [caption, setCaption] = useState("");

  return (
    <Box>
      <img src={"http://localhost:5000" + postData.imageURL} />
      <TextField
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
            setPostData({...postData, caption});
            setActiveStep((activeStep) => activeStep + 1);
        }}
      >
        Next
      </Button>
    </Box>
  );
}
