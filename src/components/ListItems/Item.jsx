import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { ListItem, ListItemText, Typography, Link } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

//import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  block: {
    display: "block"
  }
}));

const Item = ({ item, history }) => {
  const classes = useStyles();

  if (item) {
    var { kanji, radical } = item;
  }

  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={item ? kanji.character : <Skeleton />}
        secondary={
          <React.Fragment>
            {item ? (
              <>
                <Typography
                  component="p"
                  variant="p1"
                  className={classes.block}
                  color="textPrimary"
                >
                  Strokes: {kanji.stroke}
                </Typography>

                <Typography
                  component="p"
                  variant="p2"
                  className={classes.block}
                  color="textPrimary"
                >
                  Radical: {radical.character}
                </Typography>
              </>
            ) : (
              <>
                <Skeleton />
                <Skeleton />
              </>
            )}

            {item ? (
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  history.push(`/info/${kanji.character}`);
                }}
              >
                Show more
              </Link>
            ) : (
              <Skeleton width="30%" />
            )}

          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Item;
