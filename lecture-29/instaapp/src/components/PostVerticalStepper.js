import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ImageUploaderComp from "./ImageUploaderComp";
import AddCaptionComp from "./AddCaptionComp";
import ConfirmComp from "./ConfirmComp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Add Image", "Add Caption", "Submit"];
}

let PostContext = React.createContext();

function getStepContent(step, setActiveStep) {
  switch (step) {
    case 0:
      return <ImageUploaderComp setActiveStep={setActiveStep} />;
    case 1:
      return <AddCaptionComp setActiveStep={setActiveStep} />;
    case 2:
      return <ConfirmComp />;
    default:
      return "Unknown step";
  }
}

function PostVerticalStepper() {
  const [postData, setPostData] = useState({
    imageURL: "",
    caption: "",
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>{getStepContent(index, setActiveStep)}</StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </PostContext.Provider>
  );
}

export { PostVerticalStepper, PostContext };
