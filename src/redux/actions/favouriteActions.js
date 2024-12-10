
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../actions/actionTypes';


export const addToFavourite = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});


export const removeFromFavourite = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});
