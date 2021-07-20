// Types import
import { RELOAD_ALL, SET_ALL } from '../utils/types/actions/book';

const initialBookState = {
  allBooks: [],
  showCreationTextAreaInline: false,
  reloadAll: false,
};

interface IProps {
  type: string;
  payload: any;
  field: string;
}

const booksReducer = (state = initialBookState, { type, payload }: IProps) => {
  switch (type) {
    case SET_ALL:
      return {
        ...state,
        allBooks: payload,
      };
    case RELOAD_ALL:
      return {
        ...state,
        reloadAll: payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
