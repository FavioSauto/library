import { combineReducers } from 'redux';

// Reducers
import booksReducer from './booksReducer';
import authorsReducer from './authorsReducer';

interface IProps {
  authors: any;
  books: any;
}
export default combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});
