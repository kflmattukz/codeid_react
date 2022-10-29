import {
  ADD_REGION_FAILURE,
  ADD_REGION_START,
  ADD_REGION_SUCCESS,
  GET_REGIONS_FAILURE,
  GET_REGIONS_START,
  GET_REGIONS_SUCCESS,
} from '../types/region';

export const getRegions = () => ({ type: GET_REGIONS_START });

export const getRegionsSuccess = (payload) => ({
  type: GET_REGIONS_SUCCESS,
  payload,
});

export const getRegionsFailure = (payload) => ({
  type: GET_REGIONS_FAILURE,
  payload,
});

export const addRegion = (payload) => ({ type: ADD_REGION_START, payload });
export const addRegionSuccess = (payload) => ({
  type: ADD_REGION_SUCCESS,
  payload,
});
export const addRegionFailure = (payload) => ({
  type: ADD_REGION_FAILURE,
  payload,
});
