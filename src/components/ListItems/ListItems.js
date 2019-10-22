import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import itemsActions from "../../redux/items/actions";

import Item from "./Item";

const { getItems } = itemsActions;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const PaperSheet = ({ items, getItems, loading, history }) => {
  const classes = useStyles();

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        List of items
      </Typography>

      {(loading ? Array.from(new Array(3)) : items).map((item, index) => (
        <Item item={item} key={index} history={history}></Item>
      ))}
    </Paper>
  );
};

const mapStateToProps = state => ({
  items: state.Items.items,
  loading: state.Items.loadingItems
});

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaperSheet);
