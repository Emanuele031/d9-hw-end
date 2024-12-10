
import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../reducers/favouriteReducers';
import searchResultsReducer from '../reducers/searchResultsReducer';

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;
