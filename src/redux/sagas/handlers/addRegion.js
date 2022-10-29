import { addRegionSuccess, addRegionFailure } from '../../actions/region';
import { call, put } from 'redux-saga/effects';
import addRegion from '../requests/addRegion';

export function* addRegionHandler(action) {
  try {
    const region = yield call(addRegion, action.payload);
    yield put(addRegionSuccess(region.data));
  } catch (error) {
    yield put(addRegionFailure(error.message));
  }
}
