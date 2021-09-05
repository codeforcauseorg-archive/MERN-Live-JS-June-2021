import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    borderRight: "2px solid black",
  },
  inline: {
    display: "inline",
  },
}));

export default function Users({ users }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {users.map(function (userItem, index) {
        return (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={userItem.photoURL} />
            </ListItemAvatar>
            <ListItemText
              primary={userItem.user}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {userItem.email}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
