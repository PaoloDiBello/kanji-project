import itemsActions from './actions';

const initState = {
  items: [],
  item: {},
  itemsType: 'OPEN',
  loadingItems: false,
  loadingItem: false
};

export default function itemsReducer(state = initState, action) {
  //const items = state.Items;

  switch (action.type) {

    case itemsActions.GET_ITEMS:
      return {
        ...state,
        loadingItems: true
      };

    case itemsActions.GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loadingItems: false
      };

    case itemsActions.CHANGE_TICKETS_TYPE:
      return {
        ...state,
        itemsType: action.payload
      }


      case itemsActions.GET_SINGLE_ITEM:
        return {
          ...state,
          item: action.payload,
          loadingItem: true
        };

      case itemsActions.GET_SINGLE_ITEM_SUCCESS:
        return {
          ...state,
          item: action.payload,
          loadingItem: false
        };
  
        case itemsActions.GET_SINGLE_ITEM_FAILED:
          return {
            ...state,
            loadingItem: false
          };
  

    default:
      return state;
  }
}
