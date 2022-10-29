import { takeLatest } from 'redux-saga/effects';
import { ADD_REGION_START, GET_REGIONS_START } from '../types/region';
import { addRegionHandler } from './handlers/addRegion';
import { getRegionsHandler } from './handlers/getRegions';

export function* watcherSaga() {
  yield takeLatest(GET_REGIONS_START, getRegionsHandler);
  yield takeLatest(ADD_REGION_START, addRegionHandler);
}
