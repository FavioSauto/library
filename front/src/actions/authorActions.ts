import { RELOAD_ALL, SET_ALL } from '../utils/types/actions/author';

export function toggleReloadAll(payload: any) {
  return {
    type: RELOAD_ALL,
    payload,
  };
}

export function setAllAuthors(payload: any) {
  return {
    type: SET_ALL,
    payload,
  };
}

export function getAllAuthors() {
  return async function (dispatch: (any: any) => {}) {
    const response = await fetch('http://localhost:3000/api/authors');
    const authors = await response.json();

    dispatch(setAllAuthors(authors));
  };
}
