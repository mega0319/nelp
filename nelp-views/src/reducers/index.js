import { combineReducers } from 'redux';
import YelpReducer from './yelp_reducer'

const rootReducer = combineReducers({
  results: YelpReducer

});

export default rootReducer;
