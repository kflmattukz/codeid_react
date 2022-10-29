import { takeLatest } from 'redux-saga/effects';
import { GET_REGIONS_START } from '../types/region';
import { getRegionsHandler } from './handlers/getRegions';

export function* watcherSaga() {
  yield takeLatest(GET_REGIONS_START, getRegionsHandler);
}
