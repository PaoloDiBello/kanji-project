import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
  

const Item = ({item}) => {

    const classes = useStyles();


    return (
            <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://ctl.s6img.com/society6/img/aUiLBop-4KX4kluGjj16FMDEHC4/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/b5e8069cc6d348008550f26c17f89199/~~/shi-japanese-kanji-for-death-prints.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {item}
            </React.Fragment>
          }
        />
      </ListItem>
    )
}

export default Item
