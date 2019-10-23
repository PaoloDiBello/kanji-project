import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const Item = ({ item, history }) => {
  const classes = useStyles();

  if (item) {
    var { kanji, radical } = item;
  }
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
        {item ? kanji.character : <Skeleton />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Photos" secondary="Jan 9, 2014" />

      {item ? (
              <Button variant="outlined" size="medium" color="primary" className={classes.margin} 
              onClick={() => {
              history.push(`/info/${kanji.character}`);
              }}> Show more </Button>
            ) : (
              <Skeleton width="30%" />
            )}

    </ListItem>
  );
};

export default Item;
