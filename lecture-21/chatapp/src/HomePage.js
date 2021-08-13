import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, TextField } from "@material-ui/core";
import io from "socket.io-client";
import Chat from "./components/Chat"

function HomePage() {
  let { user } = useContext(UserContext);
  let [socket, setSocket] = useState();
  let [text, setText] = useState("");
  let [chat, setChat] = useState([]);

  useEffect(function () {
    const socketitem = io("http://localhost:5000/");

    socketitem.on("connect", () => {
      setSocket(socketitem);
    });

    socketitem.on("broadcast", (payload) => {
      console.log(chat);
      setChat(function(old){
        let copy = [...old];
        copy.push(payload);
        return copy;
      })
    });

    socketitem.on("disconnect", () => {
      setSocket(undefined);
    });
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
    },

    chat: {
      flexGrow: 1,
    },

    bottom: {
      display: "flex",
      flexDirection: "row",
    },

    text: {
      margin: "8px",
      flexGrow: 1,
    },

    send: {
      margin: "8px",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.chat}>
        <Chat chat={chat}/>

      </Box>
      <Box className={classes.bottom}>
        <TextField
          className={classes.text}
          variant="outlined"
          value={text}
          onChange={function (event) {
            setText(event.target.value);
          }}
        />
        <Button
          disabled={!socket}
          className={classes.send}
          variant="contained"
          color="primary"
          onClick={function () {
            socket.emit("broadcast", {
              user: user.displayName,
              photo: user.photoURL,
              text,
            });
            setText("");
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export { HomePage };
