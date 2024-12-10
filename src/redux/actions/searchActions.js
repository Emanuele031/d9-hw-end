
import { SET_SEARCH_RESULTS, SET_LOADING, SET_ERROR } from '../actions/actionTypes';


export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});


export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});


export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});


export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(setLoading(true)); 
  dispatch(setError(null)); 
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
    if (response.ok) {
      const data = await response.json();
      dispatch(setSearchResults(data.data)); 
    } else {
      throw new Error('Errore durante il recupero dei risultati');
    }
  } catch (error) {
    dispatch(setError(error.message)); 
  } finally {
    dispatch(setLoading(false)); 
  }
};
