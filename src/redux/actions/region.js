import {
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
