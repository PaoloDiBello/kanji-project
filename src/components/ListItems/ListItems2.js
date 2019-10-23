import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import { connect } from "react-redux";

import itemsActions from "../../redux/items/actions";

import {
  selectItems,
  selectLoadingItems,
  selectItemsChunk
} from "../../redux/items/selectors";

import Pagination from "material-ui-flat-pagination";

import Item from './Item'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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

    </List>
  );
}

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
  