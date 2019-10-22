const itemsActions = {
  
    CHANGE_ITEMS_TYPE: 'CHANGE_ITEMS_TYPE',
  
  
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
  
    GET_SINGLE_ITEM: "GET_SINGLE_ITEM",
    GET_SINGLE_ITEM_SUCCESS: "GET_SINGLE_ITEM_SUCCESS",  
    GET_SINGLE_ITEM_FAILED: "GET_SINGLE_ITEM_FAILED",  


  
    changeItemsType: type => {
      return (dispatch, getState) => {
        dispatch({
          type: itemsActions.CHANGE_ITEMS_TYPE,
          payload: type
        });
      }
    },
    
  
    getItems: () => {
      return (dispatch, getState) => {
        dispatch({
          type: itemsActions.GET_ITEMS
        });
      };
    },
    
    getSingleItem: (name, history) => {
      return (dispatch, getState) => {
        dispatch({
          type: itemsActions.GET_SINGLE_ITEM,
          payload: name,
          history
        });
      };
  }

  }


  export default itemsActions;