import { all } from 'redux-saga/effects';
import itemsSagas from './items/saga';

export default function* rootSaga(getState) {
  yield all([
    itemsSagas(),
  ]);
}