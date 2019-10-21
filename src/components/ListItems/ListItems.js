import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'

import itemsActions from '../../redux/items/actions'
import { ListItem, List } from '@material-ui/core';

import Item from './Item'


const {getItems} = itemsActions

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


const PaperSheet = ({items}) => {
  const classes = useStyles();

  useEffect(() => {
  getItems();
  }, [])

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            List of items
        </Typography>
        <Typography component="p">
          
          {items.map(item=><Item item={item.name}></Item>)}
        </Typography>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
    items: state.Items.items
})

const mapDispatchToProps = {
  getItems
}


export default connect(mapStateToProps, mapDispatchToProps)(PaperSheet);