import { all, takeEvery, fork, put, call } from "redux-saga/effects";
import actions from "./actions";
//import fakeData from '../../containers/Jira/jira.data.json';
import ItemsHelper from "../../helpers/itemsHelper";
//import { buildStateItems } from './helperSaga'

export function* watchGetItems() {
  yield takeEvery(actions.GET_ITEMS, doGetItems);
}

export function* doGetItems() {
  const response = yield call(ItemsHelper.getItems);
  yield put({
    type: actions.GET_ITEMS_SUCCESS,
    payload: response
  });
}

export function* watchGetSingleItem() {
  yield takeEvery(actions.GET_SINGLE_ITEM, doGetSingleItem);
}

export function* doGetSingleItem({ payload, history }) {
  const response = yield call(ItemsHelper.getSingleItem, payload);

  if (!response.error) {
    yield put({
      type: actions.GET_SINGLE_ITEM_SUCCESS,
      payload: response
    });
  } else {
    yield put({
      type: actions.GET_SINGLE_ITEM_FAILED
    });

    history.push("/404");
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetItems), fork(watchGetSingleItem)]);
}
