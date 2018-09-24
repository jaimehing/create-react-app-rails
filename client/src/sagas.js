import { all, fork } from "redux-saga/effects";
import * as app from './screens/sagas';

export default function *sagas()
{
  yield all([
    fork(app.watchers)
  ]);
}
