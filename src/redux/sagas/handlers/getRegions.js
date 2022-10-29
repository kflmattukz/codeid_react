import { call, put } from 'redux-saga/effects';
import { getRegionsFailure, getRegionsSuccess } from '../../actions/region';
import getRegionRequest from '../requests/getRegions';

export function* getRegionsHandler() {
  try {
    const regions = yield call(getRegionRequest);
    yield put(getRegionsSuccess(regions.data));
  } catch (error) {
    yield put(getRegionsFailure(error.message));
  }
}
