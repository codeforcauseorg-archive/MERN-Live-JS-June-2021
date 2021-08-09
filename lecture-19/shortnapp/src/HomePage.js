import { useContext, useState } from "react";
import { UserContext } from "./App";
import { Box, Button, TextField } from "@material-ui/core";
import { RoleGaurd } from "./RoleGaurd";
import axios from "./utils/axios";

function HomePage() {
  let { user } = useContext(UserContext);
  let emptyForm = {
    complete: "",
    short: "",
  };

  let [formdata, setFormdata] = useState(emptyForm);

  let handleChange = (event) => {
    let copy = { ...formdata };
    copy[event.target.name] = event.target.value;
    setFormdata(copy);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/short", formdata).then((response) => {
      setFormdata(emptyForm);
    });
  };

  return (
    <RoleGaurd expected={"admin"}>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            height: "100vh",
          }}
        >
          <h1>{JSON.stringify(formdata)}</h1>
          <TextField
            style={{
              margin: "20px",
            }}
            className="inputfiled"
            id="outlined-basic"
            label="Complete URL"
            name="complete"
            value={formdata.complete}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            style={{
              margin: "20px",
            }}
            className="inputfiled"
            id="outlined-basic"
            label="Short hand"
            name="short"
            value={formdata.short}
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            disabled={!(formdata.complete && formdata.short)}
            style={{
              margin: "20px",
            }}
            className="inputfiled"
            id="outlined-basic"
            label="Short hand"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </form>
    </RoleGaurd>
  );
}

export { HomePage };
