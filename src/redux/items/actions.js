const itemsActions = {
  
    CHANGE_ITEMS_TYPE: 'CHANGE_ITEMS_TYPE',
  
  
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
  
  
  
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
          type: itemsActions.GET_ITEMS,
        });
      };
    },
  
  };
  export default itemsActions;