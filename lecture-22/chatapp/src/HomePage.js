import { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, TextField } from "@material-ui/core";
import io from "socket.io-client";
import Chat from "./components/Chat";
import Users from "./components/Users";
import axios from "./utils/axios";

function HomePage() {
  let [socket, setSocket] = useState();
  let [text, setText] = useState("");
  let [chat, setChat] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(function () {
    // console.log(axios.defaults.headers["Authorization"]);
    const socketitem = io("https://arcane-reaches-63890.herokuapp.com/", {
      extraHeaders: {
        Authorization: axios.defaults.headers["Authorization"],
      },
    });

    socketitem.on("connect", () => {
      setSocket(socketitem);
    });

    socketitem.on("broadcast", (payload) => {
      setChat(function (old) {
        let copy = [...old];
        copy.push(payload);
        return copy;
      });
    });

    socketitem.on("users", (payload) => {
      setUsers(payload);
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
      display: "flex",
      flexDirection: "row",
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
        <Users users={users} />
        <Chat chat={chat} />
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
