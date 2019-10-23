import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import itemsActions from "../../redux/items/actions";

import {
  selectItems,
  selectLoadingItems,
  selectItemsChunk
} from "../../redux/items/selectors";

import Pagination from "material-ui-flat-pagination";

import Item from "./Item";

import { createStructuredSelector } from "reselect";
import { maxHeaderSize } from "http";
const { getItems } = itemsActions;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ListItemsPage = ({ items, getItems, loading, history }) => {
  const classes = useStyles();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleClick = offset => {
    setOffset(offset);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        List of items
      </Typography>

      <Pagination
        limit={10}
        offset={offset}
        total={items.length}
        onClick={(e, offset) => handleClick(offset)}
      />

      {(loading || items.length === 0
        ? Array.from(new Array(3))
        : items[offset]
      ).map((item, index) => (
        <Item item={item} key={index} history={history}></Item>
      ))}
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectItemsChunk,
  loading: selectLoadingItems
});

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemsPage);
