import React from "react";

import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import Skeleton from "@material-ui/lab/Skeleton";

const Item = ({ item, history }) => {
  if (item) {
    var { kanji } = item;
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{item ? kanji.character : <Skeleton />}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={item ? kanji.character : <Skeleton width="20%" />}
        secondary={item ? `Number strokes: ${kanji.stroke}` : <Skeleton width="80%" />}
      />
      {item ? (
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => {
            history.push(`/info/${kanji.character}`);
          }}
        >
          Show more
        </Button>
      ) : (
        <Skeleton width="30%" />
      )}
    </ListItem>
  );
};

export default Item;
