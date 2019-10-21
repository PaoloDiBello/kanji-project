import { all, takeEvery, fork, put, call } from 'redux-saga/effects';
import actions from './actions';
//import fakeData from '../../containers/Jira/jira.data.json';
import ItemsHelper from '../../helpers/itemsHelper';
import { buildStateItems } from './helperSaga'


export function* watchGetItems() {
  yield takeEvery(actions.GET_ITEMS, doGetItems);
}

export function* doGetItems() {
  var items = [];
  const response = yield call(ItemsHelper.getItems);
  items = yield buildStateItems(response);
  console.log('items', items)
  yield console.log('items.length', items.length)
  yield put({
    type: actions.GET_ITEMS_SUCCESS,
    payload: items,
  });
}


export function* watchGetSingleItem() {
  yield takeEvery(actions.GET_SINGLE_ITEM, doGetSingleItem);
}

export function* doGetSingleItem() {
  var item = [];
  const response = yield call(ItemsHelper.getSingleItem);
  item = yield buildStateItems(response);
  console.log('item', item)
  yield put({
    type: actions.GET_SINGLE_ITEM_SUCCESS,
    payload: item,
  });
}




export default function* rootSaga() {
  yield all([
    fork(watchGetItems),
    fork(watchGetSingleItem),
  ]);
}