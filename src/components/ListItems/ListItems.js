import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import itemsActions from "../../redux/items/actions";

import {
  selectLoadingItems,
  selectItemsChunk
} from "../../redux/items/selectors";

import Pagination from "material-ui-flat-pagination";

import Item from "./Item";
import Skeleton from "@material-ui/lab/Skeleton";

const { getItems } = itemsActions;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
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
    <List className={classes.root}>
      {items.length > 0 ? (
        <Pagination
          limit={10}
          offset={offset}
          total={items.length}
          onClick={(e, offset) => handleClick(offset)}
        />
      ) : (
        <Skeleton />
      )}

      {(loading || items.length === 0
        ? Array.from(new Array(3))
        : items[offset]
      ).map((item, index) => (
        <Item item={item} key={index} history={history}></Item>
      ))}
    </List>
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
