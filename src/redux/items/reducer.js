import itemsActions from './actions';

const initState = {
  items: [{name: 'John'},{name: 'Jessy'}],
  itemsType: 'OPEN',
  loadingItems: false,
};

export default function itemsReducer(state = initState, action) {
  //const items = state.Items;
  
  console.log('action', action)


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

    default:
      return state;
  }
}
