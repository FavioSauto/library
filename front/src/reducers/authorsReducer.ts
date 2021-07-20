// Types import
import { RELOAD_ALL, SET_ALL } from '../utils/types/actions/author';

const initialAuthorState = {
  allAuthors: [],
  showCreationTextAreaInline: false,
  reloadAll: false,
};

interface IProps {
  type: string;
  payload: any;
  field: string;
}

const authorsReducer = (
  state = initialAuthorState,
  { type, payload }: IProps,
) => {
  switch (type) {
    case SET_ALL:
      return {
        ...state,
        allAuthors: payload,
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

export default authorsReducer;
